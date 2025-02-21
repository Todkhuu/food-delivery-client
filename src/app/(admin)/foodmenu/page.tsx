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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const oneFood = {
  _id: "1",
  foodName: "Finger food",
  price: 12.99,
  image:
    "https://res.cloudinary.com/ds6kxgjh0/image/upload/v1739950347/q7dt7vhlctno2wmebov4.png",
  ingredients:
    "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  category: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export default function FoodMenu() {
  return (
    <div className="bg-[#f4f4f5] w-[90.8vw] px-[40px]">
      <div className="w-[87vw] flex justify-end my-[24px]">
        <AvatarDemo />
      </div>
      <div className="h-[176px] bg-[#ffffff] p-[24px] rounded-[12px]">
        <h2 className="text-[20px] mb-[16px]">Dishes category</h2>
        <Dialog>
          <DialogTrigger>
            <Image src={"/IconButton.png"} width={36} height={36} alt="" />
          </DialogTrigger>
          <DialogContent>
            <DialogTitle className="text-[18px]">Add new category</DialogTitle>
            <div className="flex flex-col gap-2">
              <p>Category name</p>
              <Input placeholder="Type category name..." />
            </div>
            <div className="flex justify-end mt-[48px]">
              <Button>Add Category</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="h-auto bg-[#ffffff] my-[24px] rounded-[12px] p-[20px] flex gap-4">
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
                <Label className="text-[14px]" htmlFor="text">
                  Food name
                </Label>
                <Input placeholder="Type food name" id="text" />
              </div>
              <div className="w-[194px] flex flex-col gap-2">
                <Label className="text-[14px]">Food price</Label>
                <Input placeholder="Enter price..." />
              </div>
            </div>
            <div>
              <p className="text-[14px] mb-2">Ingredients</p>
              <Textarea placeholder="List ingredients..." />
            </div>
            <div className="mb-[48px]">
              <p className="text-[14px] mb-2">Food image</p>
              <CloudinaryUpload />
            </div>
            <div className="flex justify-end">
              <Button>Add Dish</Button>
            </div>
          </DialogContent>
        </Dialog>
        <div className="w-[270px] h-[241px] border-[1px] rounded-[20px] p-4">
          <div
            style={{ backgroundImage: `url(${oneFood.image})` }}
            className="w-[100%] h-[129px] rounded-xl bg-center bg-cover flex items-end justify-end p-[20px]"
          >
            <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center">
              <Dialog>
                <DialogTrigger>
                  <Image
                    src={"/edit.png"}
                    width={16}
                    height={16}
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </DialogTrigger>
                <DialogContent className="w-[472px]">
                  <DialogTitle className="text-[18px]">Dishes info</DialogTitle>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-[#71717a]">Dish name</p>
                    <Input className="w-[288px]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-[#71717a]">Dish category</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-[#71717a]">Ingredients</p>
                    <Textarea className="w-[288px]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] text-[#71717a]">Price</p>
                    <Input className="w-[288px]" />
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[12px] text-[#71717a]">Food image</p>
                    <div className="w-[288px] h-[116px]">
                      <CloudinaryUpload />
                    </div>
                  </div>
                  <div></div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex justify-between mt-[20px]">
            <h2 className="text-[#ef4444] text-[14px] ">{oneFood.foodName}</h2>
            <p className="text-[12px]">${oneFood.price}</p>
          </div>
          <p className="text-[12px]">{oneFood.ingredients}</p>
        </div>
      </div>
    </div>
  );
}
