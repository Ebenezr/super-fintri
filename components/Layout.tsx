import React from "react";
import Aside from "./Aside";
interface Layoutprops {
  children?: React.ReactElement;
}
const Layout: React.FC<Layoutprops> = ({ children }) => {
  return (
    <div className="grid grid-cols-6 h-[100vh] w-screen">
      <Aside />
      <main className="col-start-2 col-end-7 bg-white h-full ">{children}</main>
    </div>
  );
};

export default Layout;
