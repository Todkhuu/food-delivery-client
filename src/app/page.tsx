import Image from "next/image";
import { Header } from "./_components/Header";
import { Categories } from "./_components/Categories";
import { Appetizers } from "./_components/Appetizers";
import { Salads } from "./_components/Salads";
import { Footer } from "./_components/Footer";
import { HeaderLogin } from "./_components/HeaderLogin";

export default function Home() {
  return (
    <div className="w-[100vw] bg-[#404040]">
      {/* <Header /> */}
      <HeaderLogin />
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
      <Appetizers />
      <Salads />
      <Footer />
    </div>
  );
}
