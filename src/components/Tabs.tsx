"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { getData } from "@/utils/data";
import { foodType } from "@/utils/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const Tab = () => {
  const [data, setData] = useState<foodType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(`food/category/2`);
      setData(data.data);
    };
    fetchData();
  }, []);

  const deleteHandler = () => {
    const remainingTasks = data.filter((data) => data._id !== data._id);
    setData(remainingTasks);
  };

  return (
    <Tabs defaultValue="cart" className="mt-[24px]">
      <TabsList className="w-[100%] rounded-full">
        <TabsTrigger
          value="cart"
          className="w-[50%] rounded-full data-[state=active]:bg-[#ef4444] data-[state=active]:text-white text-black"
        >
          Cart
        </TabsTrigger>
        <TabsTrigger
          value="order"
          className="w-[50%] rounded-full data-[state=active]:bg-[#ef4444] data-[state=active]:text-white text-black"
        >
          Order
        </TabsTrigger>
      </TabsList>
      <TabsContent value="cart">
        <Card className="p-4 mt-[24px]">
          <CardTitle className="text-[20px] mb-[20px]">My cart</CardTitle>
          <div className="flex flex-col gap-[20px]">
            {data?.map((food: foodType, index: number) => (
              <div
                key={index}
                className="flex gap-[10px] first:border-dashed first:border-b-[1px] first:pb-[20px]"
              >
                <Image
                  src={food.image}
                  width={200}
                  height={200}
                  alt=""
                  className="min-w-[124px] h-[120px] rounded-xl object-cover object-center"
                />
                <div>
                  <div className="flex">
                    <div>
                      <h2 className="text-[16px] text-[#ef4444] font-semibold ">
                        {food.foodName}
                      </h2>
                      <p className="text-[12px] text-[]">{food.ingredients}</p>
                    </div>
                    <Button
                      onClick={() => deleteHandler()}
                      variant={"ghost"}
                      className="min-w-[36px] h-[36px] rounded-full border-[#ef4444] border-[1px] flex items-center justify-center"
                    >
                      <Image
                        src={"/x.png"}
                        width={16}
                        height={16}
                        alt=""
                        className="w-[16px] h-[16px] object-cover object-center"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant={"ghost"}
            className="w-[100%] rounded-full border-[1px] border-[#ef4444] mt-[20px] mb-[132px]"
          >
            <p className="text-[#ef4444]">Add food</p>
          </Button>
        </Card>
        <Card className="p-[16px] mt-[24px]">
          <CardTitle className="text-[20px] mb-[20px]">Payment info</CardTitle>
          <div className="flex flex-col gap-2 border-dashed border-b-[1px] pb-[20px]">
            <div className="flex justify-between">
              <p className="text-[16px] text-[#71717a]">Items</p>
              <p className="text-[16px] font-semibold">$25.98</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] text-[#71717a]">Shipping</p>
              <p className="text-[16px] font-semibold">0.99$</p>
            </div>
          </div>
          <div className="flex justify-between mt-[20px]">
            <p className="text-[16px] text-[#71717a]">Total</p>
            <p className="text-[16px] font-semibold">26.97$</p>
          </div>
          <Button
            variant={"destructive"}
            className="w-[100%] rounded-full mt-[20px] "
          >
            <p className="text-white">Checkout</p>
          </Button>
        </Card>
      </TabsContent>
      <TabsContent value="order">
        <Card className="mt-[20px] p-4">
          <CardHeader className="text-[20px] font-semibold p-0">
            Order history
          </CardHeader>
          <div></div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
