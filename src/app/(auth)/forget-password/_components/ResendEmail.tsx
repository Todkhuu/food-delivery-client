import { ButtonDemo } from "@/components/Button";
import { Dispatch } from "react";
import { ButtonIcon } from "../../_components/ButtonIcon";
import { Texts } from "../../_components/Texts";
import { Reset } from "./Reset";

type resendProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
  resetPassword: (email: string) => void;
  email: string;
};

export const ResendEmail = ({
  currentStep,
  setCurrentStep,
  resetPassword,
  email,
}: resendProps) => {
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
      <ButtonDemo onClick={() => resetPassword(email)} text={"Resend email"} />
    </div>
  );
};
