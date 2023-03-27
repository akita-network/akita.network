import React from "react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
})

export interface ILayoutProps {
  children: React.ReactNode;
};

const Layout = ({
  children
}: ILayoutProps) => {


  return (
    <div className={`${montserrat.className} flex flex-col bg-dark px-4 md:px-0`}>
      {children}
    </div>
  );
}

export default Layout;