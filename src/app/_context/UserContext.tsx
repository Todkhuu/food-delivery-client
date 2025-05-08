"use client";
import { getCurrentUser } from "@/lib/services/user";
import { UserType } from "@/utils/types";
import axios, { AxiosError } from "axios";
import { CircleCheck, CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

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
    try {
      const res = await axios.post(`http://localhost:8000/auth/signin`, {
        email,
        password,
      });
      console.log("resLogin", res);

      localStorage.setItem("id", res.data.data._id);
      toast(res.data.message, {
        icon: <CircleCheck size={18} className="text-green-500" />,
      });
      if (res.data.data?._id) {
        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("email", res.data.data.email);
        setUser(res.data.data);
        push("/");
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      toast(error.response?.data.message || "Unknown error occurred", {
        icon: <CircleX size={18} className="text-red-500" />,
      });
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const id = localStorage.getItem("id");
      const data = await getCurrentUser(id);
      console.log("data2", data);
      setUser(data);
    };
    loadUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
