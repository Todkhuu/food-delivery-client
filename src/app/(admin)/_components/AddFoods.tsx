"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import CloudinaryUpload from "./CloudinaryUpload";
import { Button } from "@/components/ui/button";
import { Category, foodType } from "@/utils/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { getData } from "@/utils/data";

const formSchema = z.object({
  foodName: z.string().min(4).max(50),
  price: z.coerce.number(),
  ingredients: z.string().min(4).max(50),
  image: z.string(),
});

type categoryType = {
  category: Category;
};

export const AddFoods = ({ category }: categoryType) => {
  const [file, setFile] = useState<File>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodName: "",
      price: 0,
      ingredients: "",
      image: "",
    },
  });

  const getDatas = async () => {
    const datas = await getData("foods");
    return datas;
  };

  const createFood = async (food: foodType) => {
    try {
      const imageUrl = await handleUpload();
      if (!imageUrl) return;
      console.log("image uploaded ", imageUrl);
      const response = await fetch(`http://localhost:8000/foods`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...food,
          image: imageUrl,
          category: category._id,
        }),
      });
      // closeDialog
      getDatas();
    } catch (error) {
      console.log("Error", error);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // createFood(values);
  };

  const handleFile = (file: File) => {
    setFile(file);
  };

  const handleUpload = async () => {
    const PRESET_NAME = "food-delivery-app";
    const CLOUDINARY_NAME = "ds6kxgjh0";
    if (!file) {
      alert("please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", PRESET_NAME);
    formData.append("api_key", CLOUDINARY_NAME);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      return data.secure_url;
    } catch (err) {
      console.error(err);
      alert("Failed to upload file");
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="min-w-[270px] h-[241px] border-dashed border-[1px] rounded-[20px] border-[#ef4444] flex flex-col justify-center items-center">
        <Image src={"/iconButton.png"} width={40} height={40} alt="" />
        <p className="w-[154px] text-[14px] mt-[24px]">
          Add new Dish to {category.categoryName}
        </p>
      </DialogTrigger>
      <DialogContent className="w-[460px]">
        <DialogTitle className="text-[18px]">
          Add new Dish to {category.categoryName}
        </DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex justify-between">
              <FormField
                control={form.control}
                name="foodName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food name</FormLabel>
                    <FormControl>
                      <Input
                        className="w-[194px]"
                        placeholder="Type food name..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="w-[194px]"
                        placeholder="Enter price..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <Textarea placeholder="List Ingredients..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2">Food image</FormLabel>
                  <FormControl>
                    <CloudinaryUpload handleFile={handleFile} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end mt-[48px]">
              <Button type="submit">Add Dish</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
