import React from "react";
import { Montserrat } from 'next/font/google';
import clsxm from "@/utils/clsxm";

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export interface ILayoutProps {
  children: React.ReactNode;
};

const Layout = ({
  children
}: ILayoutProps) => {


  return (
    <div
      className={clsxm(
        montserrat.className,
        "flex",
        "flex-col",
        "bg-dark",
        "px-4",
        "md:px-0"
      )}
    >
      {children}
    </div>
  );
}

export default Layout;