import HeaderListRoute from "./HeaderListRoute";

export default function DropdownHeaderList() {
  return (
    <nav
      id="dropdown-header-list"
      popover="auto"
      className="w-45% absolute top-20 left-auto animate-fade-in mr-10 p-4 rounded-2xl bg-transparent backdrop-blur-xl border-2 text-main-blue-500 sm:w-1/4 md:hidden"
    >
      <ul className="flex flex-col justify-center items-center gap-2">
        <HeaderListRoute/>
      </ul>
    </nav>
  );
}
