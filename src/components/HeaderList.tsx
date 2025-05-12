import headerListItems from "./../constants/HeaderListItems.json";

export default function HeaderList() {
  return (
    <ul className="flex flex-row justify-center items-center gap-8">
      {headerListItems.map((item) => (
        <div className="group flex flex-col justify-center items-center">
          <li key={item.id}>
            <a
              href={item.link}
              className="text-sm text-justify leading-10 tracking-wider font-montserrat font-medium uppercase text-main-blue-500 group-hover:font-semibold"
            >
              {item.title}
            </a>
          </li>
          <div className="hidden w-2 h-2 rounded-full bg-main-blue-500 group-hover:block"></div>
        </div>
      ))}
    </ul>
  );
}
