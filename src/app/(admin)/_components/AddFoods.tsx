import {
  Dialog,
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

export const AddFoods = () => {
  return (
    <Dialog>
      <DialogTrigger className="min-w-[270px] h-[241px] border-dashed border-[1px] rounded-[20px] border-[#ef4444] flex flex-col justify-center items-center">
        <Image src={"/iconButton.png"} width={40} height={40} alt="" />
        <p className="w-[154px] text-[14px] mt-[24px]">Add new Dish to</p>
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
  );
};
