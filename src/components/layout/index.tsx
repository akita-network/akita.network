import React from "react";
import { Roboto } from 'next/font/google';
import clsxm from "@/utils/clsxm";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export interface ILayoutProps {
  children: React.ReactNode;
};

const Layout = ({
  children
}: ILayoutProps) => (
  <div
    className={clsxm(
      roboto.className,
      "flex",
      "flex-col"
    )}
  >
    {children}
  </div>
);

export default Layout;