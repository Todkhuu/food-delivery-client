"use client";
import { getData } from "@/utils/data";
import { Category } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type CategoryContextType = {
  categories: Category[];
  setCategories: (_foods: Category[]) => void;
};

export const CategoryContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("food_category");
      setCategories(data.data);
    };
    fetchData();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};
