import { ButtonDemo } from "@/components/Button";
import { InputDemo } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const ForgetPassword = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: any;
  setCurrentStep: any;
}) => {
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleClick = () => {
    setCurrentStep(currentStep + 1);
  };
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
      <InputDemo type={"email"} placeholder={"Enter your email address"} />
      <ButtonDemo onClick={handleClick} text={"Send link"} />
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
