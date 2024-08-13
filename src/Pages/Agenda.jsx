import { useEffect, useState, useContext, useCallback } from "react";
import monaLogo from "../assets/mona.png";

//react-icons
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineLeft } from "react-icons/ai";

//router-dom
import { Link } from "react-router-dom";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../Components/Firebase";

//context
import { DataSelecionadaContext } from "../Components/Context";

export function Agenda() {
  const [selecionado, setSelecionado] = useState();
  const [dataHours, setDataHours] = useState([]);

  const { dataSelecionada } = useContext(DataSelecionadaContext);

  console.log(dataHours);

  function buttonSelect() {
    setSelecionado(!selecionado);
  }

  const getHours = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "horarios"));
    const hours = querySnapshot.docs.map((doc) => doc.data());
    setDataHours(hours);
  }, [db]);

  useEffect(() => {
    getHours();
  }, [getHours, dataSelecionada]);

  return (
    <main className="bg-neutral-700 flex flex-col min-h-svh">
      <section className="flex flex-col items-center justify-center">
        {dataHours
          .filter((item) => item.dataAgendamento === dataSelecionada)
          .map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center 
        justify-center m-auto my-10 p-10
        bg-neutral-500 rounded-lg shadow-lg"
            >
              <div>
                <div className="flex items-start justify-start w-full">
                  <Link to={"/agendamento"}>
                    <button
                      type="submit"
                      class="text-gray-900  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      <AiOutlineLeft />
                    </button>
                  </Link>
                </div>
                <div>
                  <img className="max-w-40" src={monaLogo} alt="" />
                </div>
                <h1>Agendas livres na data selecionada:</h1>

                <div>
                  <p>Nome: {item.id}</p>
                  <div>
                    <p>
                      Dia: <strong>{dataSelecionada}</strong>
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
                      {item.horasAgendamento1} | <FcCheckmark />
                    </button>
                    <button
                      id="horario-1"
                      onClick={() => buttonSelect()}
                      className={
                        selecionado === true
                          ? "flex items-center justify-center gap-1 p-2 mb-2 rounded-md bg-green-400 shadow-lg"
                          : "flex items-center justify-center gap-1 p-2 mb-2 rounded-md bg-white shadow-lg"
                      }
                    >
                      {item.horasAgendamento2} | <FcCheckmark />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}
