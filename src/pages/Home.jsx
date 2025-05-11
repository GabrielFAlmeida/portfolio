import Memoji from "../assets/svg/memoji.svg?react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center bg-main-blue-100 bg-ondulation bg-[size:80%] bg-position-[-160%_40%] bg-no-repeat bg-blend-hard-light">
      <div>
        <h1 className="text-[calc(100vw*0.06)]">Título</h1>
        <h2 className="text-[calc(100vw*0.03)]">Subtítulo</h2>
      </div>
      <div className="flex justify-center items-center size-1/2vw rounded-full bg-main-blue-500 md:size-1/2vh">
         <Memoji/>
      </div>
    </div>
  );
}