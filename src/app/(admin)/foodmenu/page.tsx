import { AvatarDemo } from "../_components/Avatar";
import { AddCategories } from "../_components/AddCategories";
import { AddFoods } from "../_components/AddFoods";
import { AddedFoods } from "../_components/AddedFoods";

export default function FoodMenu() {
  return (
    <div className="bg-[#f4f4f5] w-[90.8vw] px-[40px]">
      <div className="w-[87vw] flex justify-end my-[24px]">
        <AvatarDemo />
      </div>
      <AddCategories />
      <div className="h-auto bg-[#ffffff] my-[24px] rounded-[12px] p-[20px] flex gap-4">
        <h2></h2>
        <AddFoods />
        <AddedFoods />
      </div>
    </div>
  );
}
