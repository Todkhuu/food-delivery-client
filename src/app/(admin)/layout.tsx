import { ReactNode } from "react";
import { Sidebar } from "./_components/Sidebar";

type Props = {
  children: ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <div>
      <Sidebar />
      {props.children}
    </div>
  );
};
