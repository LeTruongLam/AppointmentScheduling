import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link, useLocation } from "react-router-dom";
import { ClientLinks, AdminLinks, ProviderLinks } from "./../../constants/index";
import { RoleEnum } from "@/utils/Enum";

function Sidebar() {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext);

  const getMenuLinks = () => {
    let links = [];

    if (currentUser.role === RoleEnum.CLIENT) {
      links = ClientLinks;
    } else if (currentUser.role === RoleEnum.ADMIN) {
      links = AdminLinks;
    } else if (currentUser.role === RoleEnum.PROVIDER) {
      links = ProviderLinks;
    }

    return links.map((item) => (
      <Link
        to={item.route}
        key={item.label}
        className={`${
          location.pathname === item.route
            ? "text-blue-700 bg-blue-50 font-medium"
            : "text-sm text-gray-600 hover:text-blue-700 hover:font-medium hover:bg-blue-50"
        } p-4 flex gap-2 items-center rounded-md`}
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
    ));
  };

  return (
    <div className="h-screen bg-white w-72">
      <div className="p-4 w-full h-full">
        <div className="flex justify-center"></div>

        <div className="w-full my-6 bg-blue-50 py-3 px-4 rounded-md">
          <div className="flex justify-center items-center min-w-0 gap-x-4">
            <img
              className="h-10 w-10 flex-none rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-base font-semibold leading-6 text-blue-600">
                Leslie Alexander
              </p>
              <p className="mt-1 truncate text-sm leading-5 text-black font-semibold">
                @leslie
              </p>
            </div>
          </div>
        </div>

        <div>
          <span className="ml-4 text-gray-600 text-sm font-medium">MENU</span>
          <div className="mt-3">{getMenuLinks()}</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;