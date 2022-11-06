import { Outlet, Link, useLocation } from "react-router-dom";

import React from "react";

function Layout() {
  //Highlighting current page.
  const location = useLocation();

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 opacity-95 flex items-center justify-evenly text-white font-bold uppercase bg-green-800 p-6 ">
        <Link className="text-2xl hover:text-green-400" to="/">
          React CRM
        </Link>

        <div className="flex items-center gap-6 text-white">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? "text-green-400" : "text-white"
            } hover:text-green-400`}
          >
            Customers
          </Link>

          <Link
            to="/customers/new"
            className={`${
              location.pathname === "/customers/new"
                ? "text-green-400"
                : "text-white"
            } hover:text-green-400`}
          >
            New Customer
          </Link>
        </div>
      </nav>

      <main className="pt-32">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
