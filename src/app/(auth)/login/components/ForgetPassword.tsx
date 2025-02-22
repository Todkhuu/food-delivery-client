import { Button } from "@/components/ui/button";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dispatch } from "react";
import { FormOneInput } from "@/components/FormOneInput";
import { ButtonIcon } from "../../_components/ButtonIcon";
import { Texts } from "../../_components/Texts";

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    setCurrentStep(currentStep + 1);
  }

  return (
    <div>
      <ButtonIcon handleBack={handleBack} />
      <Texts
        header="Reset your password"
        paragraph="Enter your email to receive a password reset link."
      />
      <FormOneInput form={form} onSubmit={onSubmit} />
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
