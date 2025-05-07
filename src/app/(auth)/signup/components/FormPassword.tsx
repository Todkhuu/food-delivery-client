"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonDemo } from "@/components/Button";
import { Checkboxs } from "../../../../components/Checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { CircleCheck } from "lucide-react";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." }),
    confirm: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." }),
  })
  .superRefine(({ password, confirm }, ctx) => {
    if (password !== confirm) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords don't match",
        path: ["confirm"],
      });
    }
  });

type FormShowPassword = {
  email: string;
};

export const FormPassword = ({ email }: FormShowPassword) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  const createUser = async (email: string, password: string) => {
    const res = await axios.post(`http://localhost:8000/auth/signup`, {
      email,
      password,
    });
    toast(res.data.message, {
      icon: <CircleCheck size={18} className="text-green-500" />,
    });
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    createUser(email, values.password);
    router.push(`/login`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Checkboxs
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <ButtonDemo text={"Let's go"} />
      </form>
    </Form>
  );
};
