import Image from "next/image";
import CloudinaryUpload from "./(admin)/_components/CloudinaryUpload";
import { Header } from "./_components/Header";
import { Categories } from "./_components/Categories";

export default function Home() {
  return (
    <div>
      <Header />
      <Image
        src={
          "https://res.cloudinary.com/ds6kxgjh0/image/upload/v1739879991/vicvaptwy3qsrgjo18j7.png"
        }
        width={1000}
        height={1000}
        alt=""
        className="w-[100vw] h-[570px]"
      />
      <Categories />
      <CloudinaryUpload />
    </div>
  );
}
