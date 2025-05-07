import { ButtonDemo } from "@/components/Button";
import { Dispatch } from "react";
import { BackButton, Header } from "@/components/auth";

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
    <div className="w-[420px]">
      <BackButton handleBack={handleBack} />
      <Header
        header="Please verify Your Email"
        paragraph={
          <>
            We just sent an email to{" "}
            <strong style={{ color: "black" }}>{email}</strong>. Click the link
            in the email to verify your account.
          </>
        }
      />
      <ButtonDemo onClick={() => resetPassword(email)} text={"Resend email"} />
    </div>
  );
};
