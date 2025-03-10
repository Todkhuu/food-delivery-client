import { AvatarDemo } from "../_components/Avatar";
import { AddCategories } from "../_components/AddCategories";
import { AddFoods } from "../_components/AddFoods";
import { AddedFoods } from "../_components/AddedFoods";
import { getData } from "@/utils/data";
import { Category } from "@/utils/types";

export default async function FoodMenu() {
  const categories = await getData("food_category");
  const foods = await getData("foods");
  return (
    <div className="bg-[#f4f4f5] w-[90.8vw] px-[40px]">
      <div className="w-[87vw] flex justify-end my-[24px]">
        <AvatarDemo />
      </div>
      <AddCategories />
      {categories.data.map((category: Category) => {
        return (
          <div className="h-auto bg-[#ffffff] my-[24px] rounded-[12px] p-[20px] flex gap-4">
            <h2></h2>
            <AddFoods />
            <AddedFoods category={category} />
          </div>
        );
      })}
    </div>
  );
}
