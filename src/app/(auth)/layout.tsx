"use client";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthLayout = (props: Props) => {
  return (
    <div className="flex justify-between">
      {props.children} <Images />
    </div>
  );
};
export default AuthLayout;

const Images = () => {
  return (
    <div className="h-screen w-3/5 p-[20px]">
      <Image
        src={
          "https://res.cloudinary.com/ds6kxgjh0/image/upload/v1739851320/ewkwlk5pdepzqfjap51a.png"
        }
        alt=""
        width={1000}
        height={1000}
        className="rounded-[16px] h-full w-full"
      />
    </div>
  );
};
