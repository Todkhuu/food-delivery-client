"use client";
import { getData } from "@/utils/data";
import { FoodOrderType, foodType } from "@/utils/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type OrderContextType = {
  orders: FoodOrderType[];
  setOrders: (_orders: FoodOrderType[]) => void;
  addToBasket: (food: foodType) => void;
  basket: foodType[];
  setBasket: (_basket: foodType[]) => void;
};

export const OrderContext = createContext<OrderContextType>(
  {} as OrderContextType
);

export const useOrder = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<FoodOrderType[]>([]);
  //   const [quantity, setQuantity] = useState<FoodOrderType>();

  const [basket, setBasket] = useState<foodType[]>([]);

  const addToBasket = (food: foodType) => {};

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("food_order");
      setOrders(data.data);
    };
    fetchData();
  }, []);

  return (
    <OrderContext.Provider
      value={{ orders, setOrders, addToBasket, setBasket, basket }}
    >
      {children}
    </OrderContext.Provider>
  );
};
