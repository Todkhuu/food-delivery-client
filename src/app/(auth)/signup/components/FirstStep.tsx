import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Dispatch } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormOneInput } from "@/components/FormOneInput";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type firstStepProps = {
  currentStep: number;
  setCurrentStep: Dispatch<number>;
};

export const FirstStep = ({ currentStep, setCurrentStep }: firstStepProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setCurrentStep(currentStep + 1);
  }

  return (
    <div className="w-[416px]">
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
      <FormOneInput form={form} onSubmit={onSubmit} />
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
