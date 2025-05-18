import { Link } from "react-router";

import { childrenRoutesWithId } from "../../constants/childrenRoutes";

export default function HeaderListRoute() {
  return childrenRoutesWithId.map((route) => (
    <div key={route.id} className="group flex flex-row-reverse justify-center items-center md:flex-col">
      <li key={route.id}>
        <Link
          to={route.path}
          className="text-sm text-justify leading-10 tracking-wider font-montserrat font-medium uppercase text-main-blue-500 group-hover:font-semibold"
        >
          {route.title}
        </Link>
      </li>
      <div className="hidden w-2 h-2 mr-2 rounded-full bg-main-blue-500 md:mr-0 group-hover:block"></div>
    </div>
  ));
}
