"use client";
import { CarouselPlugin } from "@/components/Carousel";
import React from "react";
import { useCategory } from "../_context/CategoryContext";

export const Categories = () => {
  const { categories } = useCategory();

  return (
    <div className="max-w-[1264px] m-auto mt-[32px]">
      <h2 className="text-[30px] font-semibold text-secondary mb-[38px]">
        Categories
      </h2>
      <CarouselPlugin datas={categories} />
    </div>
  );
};
