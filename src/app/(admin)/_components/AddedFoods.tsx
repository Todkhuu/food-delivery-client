import { getData } from "@/utils/data";
import { EditFood } from "./EditFood";
import { Category, foodType } from "@/utils/types";

type categoryType = {
  categories: Category[];
  category: Category;
};

export const AddedFoods = async ({ category, categories }: categoryType) => {
  const foods = await getData(`foods`);
  const food = foods.data?.filter((food: foodType) => {
    return food.category._id == category._id;
  });
  console.log("food", foods);
  return (
    <>
      {food.map((oneFood: foodType) => {
        return (
          <div
            key={oneFood._id}
            className="w-[270px] h-[241px] border-[1px] rounded-[20px] p-4"
          >
            <div
              style={{ backgroundImage: `url(${oneFood.image})` }}
              className="w-[100%] h-[129px] rounded-xl bg-center bg-cover flex items-end justify-end p-[20px]"
            >
              <EditFood oneFood={oneFood} categories={categories} />
            </div>
            <div className="flex justify-between mt-[20px]">
              <h2 className="text-[#ef4444] text-[14px] ">
                {oneFood.foodName}
              </h2>
              <p className="text-[12px]">${oneFood.price}</p>
            </div>
            <p className="text-[12px]">{oneFood.ingredients}</p>
          </div>
        );
      })}
    </>
  );
};
