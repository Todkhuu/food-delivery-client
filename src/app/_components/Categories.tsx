import { CarouselPlugin } from "@/components/Carousel";
import { getData } from "@/utils/data";
import React from "react";

export const Categories = async () => {
  const data = await getData("food-category");
  return (
    <div className="max-w-[1264px] m-auto mt-[32px]">
      <h2 className="text-[30px] font-semibold text-secondary mb-[38px]">
        Categories
      </h2>
      <CarouselPlugin datas={data.data} />
    </div>
  );
};
