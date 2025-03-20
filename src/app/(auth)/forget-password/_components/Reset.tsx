"use client";
import { Dispatch } from "react";
import { ButtonIcon } from "../../_components/ButtonIcon";
import { Texts } from "../../_components/Texts";
import { ButtonLink } from "../../_components/ButtonLink";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { ButtonDemo } from "@/components/Button";
import { useRouter } from "next/navigation";

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
  resetPassword: (email: string) => void;
  setEmail: Dispatch<string>;
};

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const Reset = ({
  currentStep,
  setCurrentStep,
  resetPassword,
  setEmail,
}: firstStepProps) => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/login");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setCurrentStep(currentStep + 1);
    resetPassword(values.email);
    setEmail(values.email);
  }

  return (
    <div>
      <ButtonIcon handleBack={handleBack} />
      <Texts
        header="Reset your password"
        paragraph="Enter your email to receive a password reset link."
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ButtonDemo text={"Send link"} />
        </form>
      </Form>
      <ButtonLink text="Sign up" url="/signup" lorem="Don’t have an account?" />
    </div>
  );
};
