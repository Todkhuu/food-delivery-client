"use client";
import Image from "next/image";
import { Header } from "./_components/Header";
import { Categories } from "./_components/Categories";
import { Foods } from "./_components/Foods";
import { Footer } from "./_components/Footer";
import { HeaderLogin } from "./_components/HeaderLogin";
import { useEffect, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string | null>(null);
  useEffect(() => {
    if (localStorage) {
      const data = localStorage.getItem("email");
      setEmail(data);
    }
  }, []);
  return (
    <div className="w-[100vw] bg-[#404040]">
      {email ? <HeaderLogin /> : <Header />}
      <Image
        src={
          "https://res.cloudinary.com/ds6kxgjh0/image/upload/v1739879991/vicvaptwy3qsrgjo18j7.png"
        }
        width={1000}
        height={1000}
        alt=""
        className="w-[1440px] m-auto h-[570px] bg-center bg-cover"
      />
      <Categories />
      <Foods />
      <Footer />
    </div>
  );
}
