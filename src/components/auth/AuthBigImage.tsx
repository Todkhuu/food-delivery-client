import Image from "next/legacy/image";

export const AuthBigImage = () => {
  return (
    <div className="relative w-[60%] overflow-hidden p-5">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <Image
          src="https://res.cloudinary.com/ds6kxgjh0/image/upload/v1739851320/ewkwlk5pdepzqfjap51a.png"
          alt="cover_img"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
};
