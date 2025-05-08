"use client";
import { UserType } from "@/utils/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";

type UserContextType = {
  user?: UserType;
  login: (_email: string, _password: string) => Promise<void>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const [user, setUser] = useState<UserType | undefined>(undefined);

  const login = async (email: string, password: string) => {
    const res = await axios.post(`http://localhost:8000/auth/signin`, {
      email,
      password,
    });
    if (res.data.data?._id) {
      localStorage.setItem("id", res.data.data._id);
      setUser(res.data.data);
      push("/");
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("id");
      const data = await getCurrentUser(token);
      setUser(data?.user);
    };
    loadUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
