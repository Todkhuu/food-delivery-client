import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tab } from "@/components/Tabs";

export const HeaderLogin = () => {
  return (
    <div className="w-[100vw] h-[68px] bg-[#18181b] flex items-center">
      <div className="w-[1264px] m-auto flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Image
            src={"/headerlogo.png"}
            width={46}
            height={37}
            alt=""
            className="w-[46px] h-[37px]"
          />
          <div>
            <h2 className="text-[#fafafa] text-[20px] font-semibold">
              Nom<span className="text-red-500">Nom</span>
            </h2>
            <p className="text-[#f4f4f5] text-[12px]">Swift delivery</p>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <div className="w-[251px] flex items-center border-[1px] rounded-full bg-white px-[12px]">
            <Image
              src={"/Vector.png"}
              width={20}
              height={20}
              alt="Location"
              className="w-[16px] h-[16px]"
            />
            <Input
              className="border-none focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:text-[12px] placeholder:text-[#ef4444]"
              name="search"
              placeholder="Delivery address: Add Location"
            />
            <ChevronRight className="text-[#18181b7e]" />
          </div>
          <Sheet>
            <SheetTrigger className="w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center">
              <Image
                src={"/shopping-cart.png"}
                height={16}
                width={16}
                alt="vector"
              />
            </SheetTrigger>
            <SheetContent className="bg-[#404040] border-none p-[32px]">
              <SheetHeader>
                <SheetTitle className="flex gap-3">
                  <Image
                    src={"/shopping-cart.png"}
                    width={24}
                    height={24}
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <div className="text-white text-[20px]">Order detail</div>
                </SheetTitle>
              </SheetHeader>
              <Tab />
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[36px] h-[36px] bg-[#ef4444] rounded-full flex items-center justify-center">
              <Image
                src={"/user.png"}
                height={16}
                width={16}
                alt="vector"
                className=""
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col items-center p-4">
              <DropdownMenuLabel>Test@gmail.com</DropdownMenuLabel>
              <DropdownMenuItem>
                <Button
                  className="rounded-full bg-[#f4f4f5] "
                  variant={"ghost"}
                >
                  Sign out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
