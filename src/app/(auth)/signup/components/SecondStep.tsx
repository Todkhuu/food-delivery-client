import { ButtonDemo } from "@/components/Button";
import { InputDemo } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Dispatch } from "react";

export const SecondStep = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
}) => {
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <div>
      <Button onClick={handleBack} variant={"outline"} size="icon">
        <ChevronLeft />
      </Button>
      <h2 className="text-[24px] font-semibold mt-[24px]">
        Create a strong password
      </h2>
      <p className="text-[16px] text-[#71717a] mb-[24px]">
        Create a strong password with letters, numbers.
      </p>
      <div className="flex flex-col gap-[16px]">
        <InputDemo type={"text"} placeholder={"Password"} />
        <InputDemo type={"text"} placeholder={"Confirm"} />
        <div>
          <p className="text-[14px] text-[#71717a]">Show password</p>
        </div>
      </div>
      <Link href={"/"}>
        <ButtonDemo text={"Let's go"} />
      </Link>
      <div className="flex items-center justify-center mt-[24px]">
        <p className="text-[16px] text-[#71717a]">Already have an account?</p>
        <Link href={"/login"}>
          <Button variant={"link"}>
            <p className="text-[#2563EB]">Log in</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};
