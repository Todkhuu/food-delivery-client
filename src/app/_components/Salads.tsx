"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getData } from "@/utils/data";
import { foodType } from "@/utils/types";
import { useEffect, useState } from "react";

export const Salads = () => {
  const [foods, setFoods] = useState<foodType[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(`food/category/2`);
      setFoods(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-[1264px] m-auto mt-[72px]">
      <h2 className="text-[30px] font-semibold text-secondary mb-[54px]">
        Salads
      </h2>
      <div className="flex flex-wrap gap-[36px]">
        {foods?.map((food: foodType, index: number) => {
          return (
            <Dialog key={index}>
              <DialogTrigger className="text-left">
                <Card
                  key={index}
                  className="w-[397px] h-[342px] rounded-[20px] p-[16px] overflow-hidden"
                >
                  <div
                    style={{
                      backgroundImage: `url(${food.image})`,
                    }}
                    className="w-[365px] h-[210px] rounded-xl bg-center bg-cover"
                  ></div>
                  <CardContent className="p-0">
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
                  <CardContent className="px-0 flex flex-col justify-between">
                    <div>
                      <h2 className="text-[#ef4444] text-[30px] font-semibold">
                        {food.foodName}
                      </h2>
                      <p className="text-[16px] mt-[12px]">
                        {food.ingredients}
                      </p>
                    </div>
                    <div className="flex">
                      <div>
                        <p className="text-[16px]">Total price</p>
                        <h3 className="text-[24px] font-semibold text-[#09090b]">
                          ${food.price}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </div>
                <DialogTitle></DialogTitle>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
};
