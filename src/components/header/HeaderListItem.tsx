import headerListItems from "../../constants/HeaderListItems.json";

export default function HeaderListItem() {
  return headerListItems.map((item) => (
    <div className="group flex flex-row-reverse justify-center items-center md:flex-col">
      <li key={item.id}>
        <a
          href={item.link}
          className="text-sm text-justify leading-10 tracking-wider font-montserrat font-medium uppercase text-main-blue-500 group-hover:font-semibold"
        >
          {item.title}
        </a>
      </li>
      <div className="hidden w-2 h-2 mr-2 rounded-full bg-main-blue-500 md:mr-0 group-hover:block"></div>
    </div>
  ));
}
