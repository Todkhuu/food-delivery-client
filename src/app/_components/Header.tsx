import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-[100vw] h-[68px] bg-[#18181b] flex items-center">
      <div className="w-[1264px] m-auto flex items-center">
        <div className="flex gap-3 items-center">
          <Image
            src={"/headerlogo.png"}
            width={46}
            height={37}
            alt=""
            className="w-[46px] h-[37px]"
          />
          <div>
            <h2 className="text-[#fafafa] text-[20px] font-semibold">
              Nom<span className="text-red-500">Nom</span>
            </h2>
            <p className="text-[#f4f4f5] text-[12px]">Swift delivery</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
