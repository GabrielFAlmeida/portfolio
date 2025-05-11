import Memoji from "../assets/svg/memoji.svg?react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center bg-main-blue-100 bg-ondulation bg-[size:80%] bg-position-[-160%_40%] bg-no-repeat bg-blend-hard-light">
      <div className="flex flex-col justify-center md:flex-row md:items-center md:max-w-3/4">
        <div className="flex justify-center items-center mb-4 p-4 rounded-full bg-main-blue-500 md:min-w-1/2vh md:mr-8">
          <Memoji />
        </div>
        <div>
          <h1 className="text-5.25xl font-poppins mb-6">
            Oi, sou o Gabriel França ;)
          </h1>
          <h2 className="text-2xl font-poppins">
            Desenvolvedor full stack, brasileiro, apaixonado por web,
            mergulhando no universo da inteligência artificial
          </h2>
        </div>
      </div>
    </div>
  );
}
