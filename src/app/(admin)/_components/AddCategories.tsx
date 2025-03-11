"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getData } from "@/utils/data";
import { Category } from "@/utils/types";
import Image from "next/image";
import { useEffect, useState } from "react";
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
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const formSchema = z.object({
  categoryName: z.string().min(4).max(50),
});

export const AddCategories = () => {
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: "",
    },
  });

  const getDatas = async () => {
    const datas = await getData("food_category");
    setCategories(datas.data);
  };

  useEffect(() => {
    getDatas();
  }, []);

  const createData = async (category: string) => {
    const response = await fetch(`http://localhost:8000/food_category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: category }),
    });
    getDatas();
  };

  const editData = async (categoryName: string, id: string) => {
    const response = await fetch(`http://localhost:8000/food_category/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName }),
    });
    console.log("response", response);
    getDatas();
  };

  const editSubmit = (values: z.infer<typeof formSchema>) => {
    editData(values.categoryName, id);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    createData(values.categoryName);
  };

  const deleteData = async (id: string) => {
    const response = await fetch(`http://localhost:8000/food_category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getDatas();
  };

  return (
    <div className="h-[176px] bg-[#ffffff] p-[24px] rounded-[12px]">
      <h2 className="text-[20px] mb-[16px]">Dishes category</h2>
      <div className="flex gap-3 flex-wrap">
        {categories?.map((category: Category) => {
          return (
            <ContextMenu>
              <ContextMenuTrigger>
                <Button
                  className="rounded-full"
                  variant={"outline"}
                  key={category._id}
                >
                  {category.categoryName}
                  <Badge className="rounded-full">{category.count}</Badge>
                </Button>
              </ContextMenuTrigger>
              <ContextMenuContent className="p-2">
                <Dialog>
                  <DialogTrigger>
                    <p
                      className="text-[14px]"
                      onClick={() => {
                        form.setValue("categoryName", category.categoryName);
                        setId(category._id);
                      }}
                    >
                      Edit
                    </p>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle className="text-[18px]">
                      Edit Category
                    </DialogTitle>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(editSubmit)}
                        className="space-y-8"
                      >
                        <FormField
                          control={form.control}
                          name="categoryName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Type category name..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-end mt-[48px]">
                          <Button type="submit">
                            <p>Edit</p>
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
                <ContextMenuItem
                  className="p-0"
                  onClick={() => deleteData(category._id)}
                >
                  <p>Delete</p>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          );
        })}
        <Dialog>
          <DialogTrigger>
            <Image
              onClick={() => form.resetField("categoryName")}
              src={"/IconButton.png"}
              width={36}
              height={36}
              alt=""
            />
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-[18px]">Add new category</DialogTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="categoryName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category name</FormLabel>
                      <FormControl>
                        <Input placeholder="Type category name..." {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end mt-[48px]">
                  <Button type="submit">Add Category</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
