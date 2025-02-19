"use client";
import { Card } from "@/components/ui/card";
import { getData } from "@/utils/data";
import { useEffect, useState } from "react";

export const Appetizers = () => {
  const [foods, setFoods] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(`food/1`);
      setFoods(data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="max-w-[1264px] m-auto mt-[72px]">
      <h2 className="text-[30px] font-semibold text-secondary">Appetizers</h2>
      <div></div>
    </div>
  );
};
