import { Dispatch } from "react";
import { FormOneInput } from "@/app/(auth)/_components/FormOneInput";
import { ButtonIcon } from "../../_components/ButtonIcon";
import { Texts } from "../../_components/Texts";
import { ButtonLink } from "../../_components/ButtonLink";

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
};

export const Reset = ({ currentStep, setCurrentStep }: firstStepProps) => {
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      <ButtonIcon handleBack={handleBack} />
      <Texts
        header="Reset your password"
        paragraph="Enter your email to receive a password reset link."
      />
      <FormOneInput currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <ButtonLink text="Sign up" url="/signup" lorem="Don’t have an account?" />
    </div>
  );
};
