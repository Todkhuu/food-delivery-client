"use client";
import { getData } from "@/utils/data";
import { foodType } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type FoodContextType = {
  foods: foodType[];
  setFoods: (_foods: foodType[]) => void;
};

export const FoodContext = createContext<FoodContextType>(
  {} as FoodContextType
);

export const useFood = () => {
  return useContext(FoodContext);
};

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [foods, setFoods] = useState<foodType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const food = await getData(`foods`);
      setFoods(food.data);
    };
    fetchData();
  }, []);

  return (
    <FoodContext.Provider value={{ foods, setFoods }}>
      {children}
    </FoodContext.Provider>
  );
};
