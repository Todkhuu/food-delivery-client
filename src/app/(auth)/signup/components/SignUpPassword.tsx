import { Dispatch } from "react";
import { FormPassword } from "./FormPassword";
import { BackButton, ButtonLink, Header } from "@/components/auth";

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
  email: string;
};

export const SignUpPassword = ({
  currentStep,
  setCurrentStep,
  email,
}: firstStepProps) => {
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-[416px]">
      <BackButton handleBack={handleBack} />
      <Header
        header="Create a strong password"
        paragraph="Create a strong password with letters, numbers."
      />
      <FormPassword email={email} />
      <ButtonLink text="Log in" url="/login" lorem="Already have an account?" />
    </div>
  );
};
