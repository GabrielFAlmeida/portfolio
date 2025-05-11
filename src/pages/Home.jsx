import Memoji from "../assets/svg/memoji.svg?react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center bg-main-blue-100 bg-ondulation bg-[size:80%] bg-position-[-160%_40%] bg-no-repeat bg-blend-hard-light">
      <div className="flex flex-col justify-center items-center max-w-3/4 md:flex-row md:items-center">
        <div className="flex justify-center items-center animate-surge-and-rotate mb-4 p-4 rounded-full bg-main-blue-500 md:w-1/2vh md:mb-0 md:mr-8">
          <Memoji />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-4xl font-poppins font-bold text-main-blue-500 mb-6 md:text-5.25xl">
            Oi, sou o Gabriel França ;)
          </h1>
          <h2 className="text-2xl text-justify leading-9 font-poppins text-main-blue-500">
            Desenvolvedor full stack, brasileiro, apaixonado por web,
            mergulhando no universo da inteligência artificial
          </h2>
        </div>
      </div>
    </div>
  );
}
