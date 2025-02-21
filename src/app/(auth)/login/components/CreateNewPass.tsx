"use client";
import { ButtonDemo } from "@/components/Button";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Dispatch } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must include at least one uppercase letter.",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must include at least one lowercase letter.",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must include at least one number.",
      }),
    confirm: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must include at least one uppercase letter.",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must include at least one lowercase letter.",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must include at least one number.",
      }),
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

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
};

export const CreateNew = ({ currentStep, setCurrentStep }: firstStepProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push("/login");
  }

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="w-[416px]">
      <Button onClick={handleBack} variant={"outline"} size="icon">
        <ChevronLeft />
      </Button>
      <h2 className="text-[24px] font-semibold mt-[24px]">
        Create a strong password
      </h2>
      <p className="text-[16px] text-[#71717a] mb-[24px]">
        Create a strong password with letters, numbers.
      </p>
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
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showPassword"
              checked={showPassword}
              onCheckedChange={(checked: any) => setShowPassword(checked)}
            />
            <label
              htmlFor="showPassword"
              className="text-sm text-[#71717a] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Show password
            </label>
          </div>
          <ButtonDemo text={"Let's go"} />
        </form>
      </Form>
      <div className="flex items-center justify-center mt-[24px]">
        <p className="text-[16px] text-[#71717a]">Already have an account?</p>
        <Link href={"/login"}>
          <Button variant={"link"}>
            <p className="text-[#2563EB]">Log in</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};
