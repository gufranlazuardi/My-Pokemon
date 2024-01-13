import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = (props: Readonly<Props>) => {
  const { children } = props;
  return (
    <div className="h-screen w-full flex justify-center overflow-auto">
      <div className=" w-full md:w-[640px] border flex flex-col">
        <Navbar />
        <div className="grow p-4 overflow-auto relative">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
