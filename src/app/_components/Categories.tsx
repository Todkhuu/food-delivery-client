"use client";
import { CarouselPlugin } from "@/components/Carousel";
import { getData } from "@/utils/data";
import { Category } from "@/utils/types";
import React, { useEffect, useState } from "react";

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("food_category");
      setCategories(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-[1264px] m-auto mt-[32px]">
      <h2 className="text-[30px] font-semibold text-secondary mb-[38px]">
        Categories
      </h2>
      <CarouselPlugin datas={categories} />
    </div>
  );
};
