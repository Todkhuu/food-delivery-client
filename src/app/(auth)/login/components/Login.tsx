import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dispatch } from "react";
import { FormLogin } from "@/components/FormLogin";
import { ButtonIcon } from "../../_components/ButtonIcon";
import { useRouter } from "next/navigation";
import { Texts } from "../../_components/Texts";

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
};

export const Login = ({ currentStep, setCurrentStep }: firstStepProps) => {
  const router = useRouter();

  const handleClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <ButtonIcon handleBack={handleBack} />
      <Texts
        header={"Log in"}
        paragraph={"Log in to enjoy your favorite dishes."}
      />
      <div className="w-[416px] flex flex-col gap-[16px]">
        <FormLogin />
        <Button
          variant={"link"}
          className="flex justify-start p-0"
          onClick={handleClick}
        >
          <p className="text-[14px] text-[#71717a]">Forgot password ?</p>
        </Button>
      </div>
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
