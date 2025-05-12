import HeaderList from './HeaderList'

import Logo from "../assets/svg/logo.svg?react";

export default function Header() {
  return (
    <header className="w-screen h-fit fixed top-0 flex flex-row justify-between px-16 py-4 z-999 bg-pink-500">
      <Logo className="w-20 h-20"/>
      <HeaderList/>
    </header>
  );
}
