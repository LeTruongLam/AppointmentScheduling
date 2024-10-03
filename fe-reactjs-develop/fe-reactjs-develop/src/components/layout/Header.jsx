import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { LifeBuoy, LogOut, Settings, BellRing, Heart } from "lucide-react";
import { RoleEnum } from "@/utils/Enum";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
function Header() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="w-full h-16 px-6 ">
      <div className="flex justify-end h-full items-center">
        <div className="flex gap-3 ">
          <div className="h-10 w-10 rounded-full flex justify-center items-center ring-2 ring-white bg-gray-100 hover:bg-gray-200 cursor-pointer">
            <BellRing />
          </div>
          {currentUser.role === RoleEnum.CLIENT && (
            <div className="h-10 w-10 rounded-full flex justify-center items-center ring-2 ring-white bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <Heart />
            </div>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                className=" h-10 w-10 rounded-full ring-2 ring-white hover:opacity-75 cursor-pointer"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuItem>
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Header;
