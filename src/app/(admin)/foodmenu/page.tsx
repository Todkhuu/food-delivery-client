"use client";

import { useEffect, useState } from "react";
import { AvatarDemo } from "../_components/Avatar";
import { getData } from "@/utils/data";
import { Category } from "@/utils/types";
import CloudinaryUpload from "../_components/CloudinaryUpload";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FoodMenu() {
  //   const [categories, setCategories] = useState<Category[] | null>(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getData("food/category/1");
  //       setCategories(data);
  //     };
  //     fetchData();
  //   }, []);
  //   console.log(categories);

  return (
    <div className="bg-[#f4f4f5] w-[90.8vw] px-[40px]">
      <div className="w-[87vw] flex justify-end my-[24px]">
        <AvatarDemo />
      </div>
      <div className="h-[176px] bg-[#ffffff] p-[24px] rounded-[12px]">
        <h2 className="text-[20px]">Dishes category</h2>
      </div>
      <div className="h-auto bg-[#ffffff] my-[24px] rounded-[12px] p-[20px]">
        <h2></h2>
        <Dialog>
          <DialogTrigger className="w-[270px] h-[241px] border-dashed border-[1px] rounded-[20px] border-[#ef4444] flex flex-col justify-center items-center ">
            <Image src={"/iconButton.png"} width={40} height={40} alt="" />
            <p className="w-[154px] text-[14px] mt-[24px]">
              Add new Dish to Appetizers
            </p>
          </DialogTrigger>
          <DialogContent className="w-[460px]">
            <DialogTitle className="text-[18px]">
              Add new Dish to Appetizers
            </DialogTitle>
            <div className="flex justify-between">
              <div className="w-[194px] flex flex-col gap-2">
                <Label htmlFor="text">Food name</Label>
                <Input placeholder="Type food name" id="text" />
              </div>
              <div className="w-[194px] flex flex-col gap-2">
                <Label>Food price</Label>
                <Input placeholder="Enter price..." />
              </div>
            </div>
            <CloudinaryUpload />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
