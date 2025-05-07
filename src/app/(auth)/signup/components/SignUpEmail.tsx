"use client";
import { Dispatch } from "react";
import { FormInput } from "@/app/(auth)/signup/components/FormInput";
import { useRouter } from "next/navigation";
import { BackButton, ButtonLink, Header } from "@/components/auth";

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
  handleEmail: Dispatch<string>;
};

export const SignUpEmail = ({
  currentStep,
  setCurrentStep,
  handleEmail,
}: firstStepProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="w-[416px]">
      <BackButton handleBack={handleBack} />
      <Header
        header="Create your account"
        paragraph="Sign up to explore your favorite dishes."
      />
      <FormInput
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        handleEmail={handleEmail}
      />
      <ButtonLink text="Log in" url="/login" lorem="Already have an account?" />
    </div>
  );
};
