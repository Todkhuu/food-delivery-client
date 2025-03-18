"use client";
import { Dialogs } from "@/components/Dialog";
import { getData } from "@/utils/data";
import { Category } from "@/utils/types";
import { useEffect, useState } from "react";

export const Foods = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("food_category");
      setCategories(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-[1264px] m-auto mt-[72px]">
      {categories.map((category: Category) => {
        return (
          <div key={category._id}>
            <h2 className="text-[30px] font-semibold text-secondary my-[54px] ">
              {category.categoryName}
            </h2>
            <Dialogs category={category} />
          </div>
        );
      })}
    </div>
  );
};
