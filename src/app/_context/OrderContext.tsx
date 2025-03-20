"use client";
import { getData } from "@/utils/data";
import { FoodOrderType } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type OrderContextType = {
  orders: FoodOrderType[];
  setOrders: (_foods: FoodOrderType[]) => void;
};

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType
);

export const useOrder = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<FoodOrderType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("food_order");
      setOrders(data.data);
    };
    fetchData();
  }, []);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
