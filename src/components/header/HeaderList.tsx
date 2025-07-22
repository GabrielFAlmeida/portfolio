import HeaderListRoute from "./HeaderListRoute";

export default function HeaderList() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex flex-row justify-center items-center gap-8">
        <HeaderListRoute/>
      </ul>
    </nav>
  );
}
