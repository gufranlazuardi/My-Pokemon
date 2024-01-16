import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;

  return (
    <div className="h-screen w-full flex justify-center overflow-auto font-josefin">
      <div className=" w-full md:w-[640px] border flex flex-col">
        <Navbar />
        <div className="grow p-4 overflow-auto relative">{children}</div>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
};

export default Layout;
