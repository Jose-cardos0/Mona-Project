import mona from "../assets/mona.png";

//router-dom
import { Link } from "react-router-dom";

//icons
import { AiOutlineLeft } from "react-icons/ai";

export function Admin() {
  return (
    <main className="bg-neutral-700 flex flex-col h-screen w-screen">
      <section className="flex flex-col items-center justify-center m-auto min-w-full p-10">
        <div className="w-full">
          <Link to={"/"}>
            <button
              type="submit"
              class="text-gray-900  bg-gradient-to-r 
                      from-red-200 via-red-300 to-yellow-200 
                      hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                      focus:ring-red-100 dark:focus:ring-red-400 font-medium 
                      rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-md shadow-black"
            >
              <AiOutlineLeft />
            </button>
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-center font-bold text-white mb-3">
            Área Administrativa
          </p>
          <div className="flex items-center justify-center">
            <img className="max-w-60 " src={mona} alt="" />
          </div>
          <div className="text-center text-white font-bold mt-5">
            Faça seu login:
          </div>
          <form className="flex flex-col mt-5">
            <input
              type="text"
              className=" text-cyan-50 outline-none
               rounded-md p-2 bg-transparent border-b-2
               focus:border-b-4 focus:border-orange-300 focus:bg-transparent 
               focus:outlines-none  shadow-md shadow-black
               "
              placeholder="Login"
            />
            <br />
            <input
              type="password"
              className=" text-cyan-50 
              outline-none rounded-md p-2 bg-transparent border-b-2
              focus:border-b-4 focus:border-orange-300 focus:bg-transparent shadow-md shadow-black "
              placeholder="Digite sua senha..."
            />
            <Link to={"/adminregistros"}>
              <button
                type="submit"
                class="text-gray-900 w-full mt-5 bg-gradient-to-r from-red-200
                 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 
                 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium 
                 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-md shadow-black"
              >
                Acessar
              </button>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
