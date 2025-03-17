import { Dialogs } from "@/components/Dialog";
import { getData } from "@/utils/data";
import { Category } from "@/utils/types";

export const Foods = async () => {
  const categories = await getData("food_category");
  return (
    <div className="max-w-[1264px] m-auto mt-[72px]">
      {categories.data.map((category: Category) => {
        return (
          <>
            <h2 className="text-[30px] font-semibold text-secondary my-[54px] ">
              {category.categoryName}
            </h2>
            <Dialogs category={category} />
          </>
        );
      })}
    </div>
  );
};
