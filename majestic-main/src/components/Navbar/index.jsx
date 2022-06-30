import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [navigate]);

  const logOutHandler = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <nav className="bg-teal-500 h-screen w-2/12 w- border-r border-gray-100 overflow-y-scroll">
      <div className="h-full flex flex-col p-5 justify-between">
        <div>
          <div className="text-center pt-10">
            <img
              src={localStorage.getItem("profile")}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
            <h1 className="pt-3 text-white">{user.name}</h1>
          </div>
          <div className=" flex flex-col space-y-5 pt-8 text-white">
            <Link
              to={"/dashboard"}
              className="p-3 rounded bg-teal-400 hover:bg-gray-100 hover:text-teal-800 flex items-center space-x-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p>Dashboard</p>
            </Link>
            <Link
              to={"/destinations"}
              className="p-3 rounded bg-teal-400 hover:bg-gray-100 hover:text-teal-800 flex items-center space-x-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>Destinations</p>
            </Link>
            <Link
              to={"/events"}
              className="p-3 rounded bg-teal-400 hover:bg-gray-100 hover:text-teal-800 flex items-center space-x-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>Events</p>
            </Link>
            <Link
              to={"/orders"}
              className="p-3 rounded bg-teal-400 hover:bg-gray-100 hover:text-teal-800 flex items-center space-x-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <p>Orders</p>
            </Link>
            <Link
              to={"/users"}
              className="p-3 rounded bg-teal-400 hover:bg-gray-100 hover:text-teal-800 flex items-center space-x-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>Users</p>
            </Link>
            <Link
              onClick={logOutHandler}
              to={"/account"}
              className="p-3 rounded bg-teal-400 hover:bg-gray-100 hover:text-teal-800 flex items-center space-x-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <p>Log out</p>
            </Link>
          </div>
        </div>
        <div className="text-center text-white text-sv-dark-blue py-10">
          <p>
            Majestic Banyuwangi
            <br />
            2022
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
