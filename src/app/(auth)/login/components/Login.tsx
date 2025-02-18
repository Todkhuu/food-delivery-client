import { ButtonDemo } from "@/components/Button";
import { InputDemo } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const Login = ({
  currentStep,
  setCurrentStep,
}: {
  currentStep: any;
  setCurrentStep: any;
}) => {
  const handleClick = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <div>
      <Button variant={"outline"} size="icon">
        <ChevronLeft />
      </Button>
      <h2 className="text-[24px] font-semibold mt-[24px]">Log in</h2>
      <p className="text-[16px] text-[#71717a] mb-[24px]">
        Log in to enjoy your favorite dishes.
      </p>
      <div className="flex flex-col gap-[16px]">
        <InputDemo type={"text"} placeholder={"Enter your email address"} />
        <InputDemo type={"text"} placeholder={"Password"} />
        <Button
          onClick={handleClick}
          variant={"link"}
          className="flex justify-start p-0"
        >
          <p className="text-[14px] text-[#71717a]">Forgot password ?</p>
        </Button>
      </div>
      <Link href={"/"}>
        <ButtonDemo text={"Let's go"} />
      </Link>
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
