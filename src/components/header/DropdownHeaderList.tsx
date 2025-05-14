import HeaderListItem from "./HeaderListItem";

export default function DropdownHeaderList() {
  return (
    <nav
      id="dropdown-header-list"
      popover="auto"
      className="w-full absolute top-28 p-4 rounded-2xl bg-transparent backdrop-blur-xl border-2 text-main-blue-500 md:hidden"
    >
      <ul className="flex flex-col justify-center items-center gap-2">
        <HeaderListItem />
      </ul>
    </nav>
  );
}
