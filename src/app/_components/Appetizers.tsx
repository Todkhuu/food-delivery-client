import { Dialogs } from "@/components/Dialog";
import { getData } from "@/utils/data";

export const Appetizers = async () => {
  const data = await getData(`food/category/1`);
  return (
    <div className="max-w-[1264px] m-auto mt-[72px]">
      <h2 className="text-[30px] font-semibold text-secondary mb-[54px]">
        Appetizers
      </h2>
      <Dialogs datas={data.data} />
    </div>
  );
};
