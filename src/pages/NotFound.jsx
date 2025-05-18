import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="w-screen h-fit min-h-screen flex flex-row justify-center items-center pt-28 bg-main-blue-100 bg-ondulation bg-[size:80%] bg-position-[-160%_40%] bg-no-repeat bg-blend-hard-light md:pt-0">
      <div className="flex flex-col justify-center items-center max-w-3/4 md:flex-row md:items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <ExclamationCircleIcon className="w-25 h-25 text-main-blue-500 mr-2" />
            <h1 className="text-8xl font-poppins font-bold text-main-blue-500">
              404
            </h1>
          </div>
          <h2 className="text-2xl text-justify leading-9 font-poppins text-main-cyan-200">
            Essa página não foi encontrada, mas não se preocupe. Você pode
            voltar para a 
            <Link to="/" className="text-main-cyan-200 underline ml-2 hover:text-main-cyan-100">
              página inicial
            </Link>
            .
          </h2>
        </div>
      </div>
    </div>
  );
}
