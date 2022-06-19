import React from "react";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Majestic Banyuangi</title>
        <meta name="keywords" content="HTML,CSS,JavaScript" />
        <meta
          name="description"
          content="Ideas page using react helmet very easy to implement "
        />
      </Helmet>
      <Navbar />
      <div className="lg:px-20 md:px-10 px-2 w-full py-1 lg:py-10 md:py-5">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <h1>Welcome</h1>
          </div>
        </div>
      </div>
    </>
  );
}
