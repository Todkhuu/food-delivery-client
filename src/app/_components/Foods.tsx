"use client";
import { Dialogs } from "@/components/Dialog";
import { Category } from "@/utils/types";
import { useCategory } from "../_context/CategoryContext";

export const Foods = () => {
  const { categories } = useCategory();

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
