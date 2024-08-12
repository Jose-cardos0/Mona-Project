//img
import monaLogo from "../assets/mona.png";

//links

import { Link } from "react-router-dom";

export function Agendamento() {
  return (
    <section>
      <div
        className="flex flex-col h-screen w-screen 
      items-center justify-center mx-auto
      bg-neutral-700"
      >
        <main
          className="w-screen h-screen
         m-auto items-center justify-center
         p-10"
        >
          <div className="flex flex-col justify-center">
            <h1 className="text-center text-cyan-50 ">FAÇA SEU AGENDAMENTO</h1>
            <div className="flex items-center justify-center w-full">
              <img className="max-w-60 " src={monaLogo} alt="" />
            </div>

            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Digite seu nome..."
                className="p-2 mb-2 bg-neutral-700 border-b-2"
                required
              />
              <input
                type="date"
                className="p-2 mb-2 bg-neutral-700 border-b-2
                 text-cyan-50"
                required
              />
              <p className="text-cyan-50 mt-4">Selecione um serviço:</p>
              <select
                className="p-2 mb-2 bg-neutral-700 
              border-b-2 text-cyan-50"
                required
              >
                <option>Selecione uma opção...</option>
                <option>Massagem esportiva</option>
              </select>
              <div className="flex items-center justify-center my-10 z-50">
                <Link to={"/agenda"}>
                  <button
                    type="submit"
                    class="text-gray-900  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Agendar !
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
