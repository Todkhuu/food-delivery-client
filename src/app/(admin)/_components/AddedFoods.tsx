import { EditFood } from "./EditFood";

const oneFood = {
  _id: "1",
  foodName: "Finger food",
  price: 12.99,
  image:
    "https://res.cloudinary.com/ds6kxgjh0/image/upload/v1739950347/q7dt7vhlctno2wmebov4.png",
  ingredients:
    "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  category: "1",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const AddedFoods = () => {
  return (
    <div className="w-[270px] h-[241px] border-[1px] rounded-[20px] p-4">
      <div
        style={{ backgroundImage: `url(${oneFood.image})` }}
        className="w-[100%] h-[129px] rounded-xl bg-center bg-cover flex items-end justify-end p-[20px]"
      >
        <EditFood />
      </div>
      <div className="flex justify-between mt-[20px]">
        <h2 className="text-[#ef4444] text-[14px] ">{oneFood.foodName}</h2>
        <p className="text-[12px]">${oneFood.price}</p>
      </div>
      <p className="text-[12px]">{oneFood.ingredients}</p>
    </div>
  );
};
