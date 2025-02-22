"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Dispatch } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { FormShow } from "@/components/FormShow";
import { ButtonIcon } from "../../_components/ButtonIcon";
import { Texts } from "../../_components/Texts";

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
      <ButtonIcon handleBack={handleBack} />
      <Texts
        header="Create a new password"
        paragraph="Set a new password with a combination of letters and numbers for better
        security."
      />
      <FormShow
        form={form}
        onSubmit={onSubmit}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
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
