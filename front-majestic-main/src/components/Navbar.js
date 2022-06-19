import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="m-auto max-w-6xl">
      <div className="flex items-center justify-between z-10 w-full text-center py-5 bg-teal-600 top-0 px-16 space-x-8">
        <Link to="/">
          <h3 className="lg:text-right text-left text-xl font-bold uppercase text-white">
            Majestic Banyuangi
          </h3>
        </Link>
        <div className="flex justify-end space-x-16 text-sm font-medium text-white">
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
          <Link to="/destinations">
            <p>Destinations</p>
          </Link>
          <Link to="/evetns">
            <p>Events</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
