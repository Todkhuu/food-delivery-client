import { ButtonDemo } from "@/components/Button";
import { Dispatch } from "react";
import { ButtonIcon } from "../../_components/ButtonIcon";
import { Texts } from "../../_components/Texts";

type resendProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
};

export const ResendEmail = ({ currentStep, setCurrentStep }: resendProps) => {
  const handleClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-[416px]">
      <ButtonIcon handleBack={handleBack} />
      <Texts
        header="Please verify Your Email"
        paragraph="We just sent an email to Click the link in the email to verify your
        account."
      />
      <ButtonDemo onClick={handleClick} text={"Resend email"} />
    </div>
  );
};
