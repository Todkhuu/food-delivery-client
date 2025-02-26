import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import CloudinaryUpload from "./CloudinaryUpload";
import { Button } from "@/components/ui/button";

export const EditFood = () => {
  return (
    <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center">
      <Dialog>
        <DialogTrigger>
          <Image
            src={"/edit-2.png"}
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
          <div className="flex justify-between mt-[36px]">
            <Button variant={"ghost"} className="border-[1px] p-3">
              <Image src={"/trash.png"} width={16} height={16} alt="trash" />
            </Button>
            <Button>
              <p>Save changes</p>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
