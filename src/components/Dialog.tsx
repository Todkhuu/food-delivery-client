"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Category, foodType } from "@/utils/types";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "./ui/button";
import { getData } from "@/utils/data";
import { useEffect, useState } from "react";

export const Dialogs = ({ category }: { category: Category }) => {
  const [foods, setFoods] = useState<foodType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const food = await getData(`foods`);
      setFoods(food.data);
    };
    fetchData();
  }, []);

  const filtered = foods?.filter(
    (food: foodType) => food.category._id == category._id
  );

  return (
    <div className="flex flex-wrap gap-[36px]">
      {filtered?.map((food: foodType, index: number) => {
        return (
          <Dialog key={index}>
            <DialogTrigger className="text-left">
              <Card className="w-[397px] h-[342px] rounded-[20px] p-[16px] overflow-hidden">
                <div
                  style={{
                    backgroundImage: `url(${food.image})`,
                  }}
                  className="w-[365px] h-[210px] rounded-xl bg-center bg-cover"
                ></div>
                <CardContent className="px-0">
                  <div className="flex justify-between mt-[20px]">
                    <h2 className="text-[#ef4444] text-[24px] font-semibold line-clamp-1">
                      {food.foodName}
                    </h2>
                    <h3 className="text-[18px] font-semibold text-[#09090b]">
                      ${food.price}
                    </h3>
                  </div>
                  <p className="text-[14px]">{food.ingredients}</p>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="min-w-[826px] h-[412px]">
              <div className="flex gap-[24px]">
                <div
                  style={{
                    backgroundImage: `url(${food.image})`,
                  }}
                  className="w-[377px] h-[364px] rounded-xl bg-center bg-cover"
                ></div>
                <CardContent className="px-0 py-0 flex flex-col justify-between">
                  <div>
                    <h2 className="text-[#ef4444] text-[30px] font-semibold">
                      {food.foodName}
                    </h2>
                    <p className="text-[16px] mt-[12px]">{food.ingredients}</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-[16px]">Total price</p>
                        <h3 className="text-[24px] font-semibold text-[#09090b]">
                          ${food.price}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <CircleMinus className="stroke-[0.5px] w-[44px] h-[44px]" />
                        <p className="text-[18px] font-semibold">1</p>
                        <CirclePlus className="stroke-[0.5px] w-[44px] h-[44px]" />
                      </div>
                    </div>
                    <Button className="w-[100%] h-[44px] rounded-full mt-[24px]">
                      Add to cart
                    </Button>
                  </div>
                </CardContent>
              </div>
              <DialogTitle></DialogTitle>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};
