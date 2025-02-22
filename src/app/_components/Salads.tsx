import { Dialogs } from "@/components/Dialog";
import { getData } from "@/utils/data";

export const Salads = async () => {
  const data = await getData(`food/category/2`);
  return (
    <div className="max-w-[1264px] m-auto mt-[72px]">
      <h2 className="text-[30px] font-semibold text-secondary mb-[54px]">
        Salads
      </h2>
      <Dialogs datas={data.data} />
    </div>
  );
};
