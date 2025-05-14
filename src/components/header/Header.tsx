import HeaderList from "./HeaderList";
import DropdownHeaderList from "./DropdownHeaderList";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "../../assets/svg/logo.svg?react";

export default function Header() {
  return (
    <header className="w-screen h-fit fixed top-0 flex flex-row justify-between items-center px-16 py-4 z-999 bg-transparent backdrop-blur-xs">
      <Logo className="size-20" />
      <HeaderList />
      <div className="md:hidden flex flex-col justify-center items-center">
        <button
          popoverTarget="dropdown-header-list"
          className="flex justify-center items-center"
        >
          <Bars3Icon className="size-8 min-w-8 min-h-8 cursor-pointer text-main-blue-500" />
        </button>
        <DropdownHeaderList />
      </div>
    </header>
  );
}
