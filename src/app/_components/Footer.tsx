"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

const nomnom = ["Home", "Contact us", "Delivery zone"];
const menu = [
  "Appetizers",
  "Salads",
  "Pizzas",
  "Lunch favorites",
  "Main dishes",
];
const menus = [
  "Side dish",
  "Brunch",
  "Desserts",
  "Beverages",
  "Fish & Sea foods",
];
const footer = [
  "Copy right 2024 © Nomnom LLC",
  "Privacy policy",
  "Terms and conditoin",
  "Cookie policy",
];

export const Footer = () => {
  const text = "Fresh fast delivered";

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className=" w-[100vw] h-[755px] bg-[#18181b] mt-[134px] pt-[60px]">
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="h-[92px] bg-[#ef4444] flex items-center "
      >
        <CarouselContent className="flex gap-[34px] justify-center">
          {Array.from({ length: 20 }).map((_, index: number) => {
            return (
              <CarouselItem key={index} className="basis-22">
                <p className="text-[36px] font-semibold text-secondary">
                  Fresh fast delivered
                </p>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="w-[1264px] m-auto h-[228px] flex mt-[76px]">
        <div className="flex flex-col gap-3 items-center">
          <Image
            src={"/headerlogo.png"}
            width={46}
            height={37}
            alt=""
            className="w-[46px] h-[37px]"
          />
          <div className="text-center">
            <h2 className="text-white text-[20px] font-semibold">
              Nom<span className="text-[#ef4444]">Nom</span>
            </h2>
            <p className="text-[#f4f4f5] text-[12px]">Swift delivery</p>
          </div>
        </div>
        <div className="w-[788px] flex justify-between ml-[220px]">
          <div className="flex flex-col gap-4">
            <h3 className="text-[16px] text-[#71717a]">NOMNOM</h3>
            {nomnom.map((nom) => (
              <p className="text-[16px] text-[#fafafa]">{nom}</p>
            ))}
          </div>
          <div className="w-[320px] flex justify-between">
            <div className="flex flex-col gap-4">
              <h3 className="text-[16px] text-[#71717a]">MENU</h3>
              {menu.map((menu) => (
                <p className="text-[16px] text-[#fafafa]">{menu}</p>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h3>
                <br></br>
              </h3>
              {menus.map((menu) => (
                <p className="text-[16px] text-[#fafafa]">{menu}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[21px]">
            <h3 className="text-[16px] text-[#71717a]">FOLLOW US</h3>
            <div className="flex gap-4">
              <Image src={"/fb.png"} width={28} height={27} alt="" />
              <Image src={"/ig.png"} width={28} height={27} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1264px] m-auto flex gap-[48px] mt-[104px] border-t-[1px] border-[#71717a]">
        {footer.map((footer) => (
          <p className="text-[14px] text-[#71717a] pt-[32px]">{footer}</p>
        ))}
      </div>
    </div>
  );
};
