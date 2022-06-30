import React from "react";
import useWindowDimensions from "../../utils/useWindowDimensions";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  const { height, width } = useWindowDimensions();
  return (
    <main className="flex bg-gray-100">
      <Navbar />
      <div
        className={`h-screen ${
          width < 1000 ? "w-12/12" : "w-10/12"
        } overflow-y-scroll p-5`}
      >
        <div
          className={`${
            width < 1000 ? "w-full" : "w-[850px] mx-auto"
          } pb-14 md:pt-10`}
        >
          <section>{children}</section>
        </div>
      </div>
    </main>
  );
};

export default Layout;
