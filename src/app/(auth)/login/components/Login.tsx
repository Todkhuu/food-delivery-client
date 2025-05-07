"use client";
import { Button } from "@/components/ui/button";
import { FormLogin } from "@/app/(auth)/login/components/FormLogin";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BackButton, ButtonLink, Header } from "@/components/auth";

export const Login = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div>
      <BackButton handleBack={handleBack} />
      <Header
        header={"Log in"}
        paragraph={"Log in to enjoy your favorite dishes."}
      />
      <div className="w-[416px] flex flex-col gap-[16px]">
        <FormLogin />
        <Link href={"/forget-password"}>
          <Button variant={"link"} className="flex justify-start p-0">
            <p className="text-[14px] text-[#71717a]">Forgot password ?</p>
          </Button>
        </Link>
      </div>
      <ButtonLink text="Sign up" url="/signup" lorem="Don’t have an account?" />
    </div>
  );
};
