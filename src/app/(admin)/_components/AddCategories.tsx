import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export const AddCategories = () => {
  return (
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
  );
};
