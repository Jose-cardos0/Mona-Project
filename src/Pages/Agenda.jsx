import { useState } from "react";
import monaLogo from "../assets/mona.png";

//reacticons
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineLeft } from "react-icons/ai";

export function Agenda() {
  const [selecionado, setSelecionado] = useState();

  console.log(selecionado);

  function buttonSelect(id) {
    setSelecionado(!selecionado);
    console.log(id);
  }

  return (
    <main className="bg-neutral-700 flex flex-col min-h-svh">
      <section className="flex flex-col items-center justify-center">
        <div
          className="flex flex-col items-center 
        justify-center m-auto my-10 p-10
        bg-neutral-500 rounded-lg shadow-lg"
        >
          <div className="flex items-start justify-start w-full">
            <button
              type="submit"
              class="text-gray-900  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              <AiOutlineLeft />
            </button>
          </div>
          <h1>Agendas livres na data selecionada:</h1>
          <div>
            <div>
              <img className="max-w-40" src={monaLogo} alt="" />
            </div>
            <p>Nome: Monaina</p>
            <div>
              <p>
                Dia: <strong>12/08/2024</strong>
              </p>
            </div>
            <div>
              <p className="border-b-2 mb-2">Horários disponíveis:</p>
              <button
                id="horario-1"
                onClick={() => buttonSelect()}
                className={
                  selecionado === true
                    ? "flex items-center justify-center gap-1 p-2 mb-2 rounded-md bg-green-400 shadow-lg"
                    : "flex items-center justify-center gap-1 p-2 mb-2 rounded-md bg-white shadow-lg"
                }
              >
                12:00 às 13:00 | <FcCheckmark />
              </button>
              <button
                id="horario-2"
                onClick={() => buttonSelect()}
                className={
                  selecionado === true
                    ? "flex items-center justify-center gap-1 p-2 mb-2 rounded-md bg-green-400 shadow-lg"
                    : "flex items-center justify-center gap-1 p-2 mb-2 rounded-md bg-white shadow-lg"
                }
              >
                13:00 às 14:00 | <FcCheckmark />
              </button>
              <button
                id="horario-3"
                onClick={() => buttonSelect()}
                className={
                  selecionado === true
                    ? "flex items-center justify-center gap-1 p-2 mb-2 rounded-md bg-green-400 shadow-lg"
                    : "flex items-center justify-center gap-1 p-2 mb-2 rounded-md bg-white shadow-lg"
                }
              >
                14:00 às 15:00 | <FcCheckmark />
              </button>
            </div>
          </div>
          <button
            type="submit"
            class="text-gray-900  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Agendar !
          </button>
        </div>
      </section>
    </main>
  );
}
