import { ToggleGroupDemo } from "@/components/Togglegroup";
import Image from "next/image";

export type SideType = {
  icon: string;
  text: string;
};

const sidebars = [
  {
    icon: "/DashboardIcon.png",
    text: "Food menu",
  },
  {
    icon: "/TruckIcon.png",
    text: "Orders",
  },
  {
    icon: "/SettingsIcon.png",
    text: "Settings",
  },
];

export const Sidebar = () => {
  return (
    <div className="min-w-[205px] h-screen py-[36px] px-[20px] bg-[#ffffff]">
      <div className="flex gap-3 items-center">
        <Image
          src={"/headerlogo.png"}
          width={36}
          height={29}
          alt=""
          className="w-[36px] h-[29px]"
        />
        <div>
          <h2 className="text-[#09090B] text-[18px] font-semibold">NomNom</h2>
          <p className="text-[#71717A] text-[12px]">Swift delivery</p>
        </div>
      </div>
      <ToggleGroupDemo sidebars={sidebars} />
    </div>
  );
};
