import { ButtonDemo } from "@/components/Button";
import { InputDemo } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const FirstStep = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: any;
  setCurrentStep: any;
}) => {
  const handleClick = () => {
    setCurrentStep(currentStep + 1);
    console.log(setCurrentStep(currentStep + 1));
  };

  return (
    <div>
      <Link href={"/"}>
        <Button variant={"outline"} size="icon">
          <ChevronLeft />
        </Button>
      </Link>
      <h2 className="text-[24px] font-semibold mt-[24px]">
        Create your account
      </h2>
      <p className="text-[16px] text-[#71717a] mb-[24px]">
        Sign up to explore your favorite dishes.
      </p>
      <InputDemo type={"email"} placeholder={"Enter your email address"} />
      <ButtonDemo onClick={handleClick} text={"Let's go"} />
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
