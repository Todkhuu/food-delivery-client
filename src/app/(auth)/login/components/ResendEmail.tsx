import { ButtonDemo } from "@/components/Button";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Dispatch } from "react";

type resendProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
};

export const ResendEmail = ({ currentStep, setCurrentStep }: resendProps) => {
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleClick = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="w-[416px]">
      <Button onClick={handleBack} variant={"outline"} size="icon">
        <ChevronLeft />
      </Button>
      <h2 className="text-[24px] font-semibold mt-[24px]">
        Please verify Your Email
      </h2>
      <p className="text-[16px] text-[#71717a] mb-[24px] mt-[16px]">
        We just sent an email to{" "}
        <span className="text-[20px] text-black">"email oruulj irne"</span>{" "}
        Click the link in the email to verify your account.
      </p>
      <ButtonDemo onClick={handleClick} text={"Resend email"} />
    </div>
  );
};
