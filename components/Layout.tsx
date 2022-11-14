import React from "react";
import Aside from "./Aside";
interface Layoutprops {
  children?: React.ReactElement;
}
const Layout: React.FC<Layoutprops> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 h-[100vh] w-screen">
      <Aside />
      <main className="flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
