"use client";
import { SideType } from "@/app/(admin)/_components/Sidebar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ToggleGroupDemo = ({ sidebars }: { sidebars: any }) => {
  const router = useRouter();

  const clickHandler = (value: string) => {
    if (value == "Food menu") {
      router.push("/foodmenu");
    }
    if (value == "Orders") {
      router.push("/orders");
    }
  };
  return (
    <ToggleGroup
      type="single"
      className="mt-[40px] flex flex-col items-start"
      onValueChange={clickHandler}
    >
      {sidebars.map((sidebar: SideType, index: number) => {
        return (
          <ToggleGroupItem
            key={index}
            value={sidebar.text}
            className="w-[165px] h-[40px] rounded-full px-[24px] flex justify-start focus:bg-secondary-foreground focus:text-secondary"
          >
            <Image
              src={sidebar.icon}
              width={22}
              height={22}
              alt=""
              className=""
            />
            <p>{sidebar.text}</p>
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
};
