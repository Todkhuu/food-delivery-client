import { ButtonDemo } from "@/components/Button";
import { InputDemo } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dispatch } from "react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
};

export const ForgetPassword = ({
  currentStep,
  setCurrentStep,
}: firstStepProps) => {
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setCurrentStep(currentStep + 1);
  }

  return (
    <div>
      <Button onClick={handleBack} variant={"outline"} size="icon">
        <ChevronLeft />
      </Button>
      <h2 className="text-[24px] font-semibold mt-[24px]">
        Reset your password
      </h2>
      <p className="text-[16px] text-[#71717a] mb-[24px]">
        Enter your email to receive a password reset link.
      </p>
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
      {/* <InputDemo type={"email"} placeholder={"Enter your email address"} /> */}
      <div className="flex items-center justify-center mt-[24px]">
        <p className="text-[16px] text-[#71717a]">Don’t have an account?</p>
        <Link href={"/signup"}>
          <Button variant={"link"}>
            <p className="text-[#2563EB]">Sign up</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};
