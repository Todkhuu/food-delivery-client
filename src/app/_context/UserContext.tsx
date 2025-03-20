"use client";
import { createContext, ReactNode } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
