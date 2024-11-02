import React, { useState, useEffect, useContext, useCallback } from "react";

// react-icons
import { FcCheckmark, FcApproval } from "react-icons/fc";
import { AiOutlineLeft } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

// router-dom
import { Link } from "react-router-dom";
import { getDocs, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../Components/Firebase";

// context
import { DataSelecionadaContext } from "../Components/Context";

//imgs
import logoManu from "../assets/manu.png";
import logoMona from "../assets/mona.png";
import logoGui from "../assets/gui.png";
import logoSavio from "../assets/savio.png";
import logoCm from "../assets/cmLogo.png";

export function Agenda() {
  const [dataHours, setDataHours] = useState([]);
  const [selectedTime, setSelectedTime] = useState({});
  const { dataSelecionada, renderNomeCliente, renderServico } = useContext(
    DataSelecionadaContext
  );

  const getHours = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "horarios"));
    const hours = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDataHours(hours);
  }, []);

  useEffect(() => {
    getHours();
  }, [getHours, dataSelecionada]);

  function buttonSelect(itemId, hourKey) {
    setSelectedTime((prevState) => {
      // Verifica se o horário já está selecionado
      if (prevState[itemId] === hourKey) {
        // Se sim, desmarque (remove a seleção)
        const newState = { ...prevState };
        delete newState[itemId];
        return newState;
      }
      // Caso contrário, selecione o horário
      return {
        ...prevState,
        [itemId]: hourKey,
      };
    });
  }

  function handleAgendar(item) {
    const dadosItem = [item];

    const dataList = [];
    dadosItem.map((prevItem) => {
      let objectlist = {
        data: prevItem.dataAgendamento,
        nomeFuncionario: prevItem.id,
        nomeCliente: renderNomeCliente,
        servicoSelecionado: renderServico,
      };

      dataList.push(objectlist);
    });

    const message = dataList
      .map((msg) => {
        return (
          `😊 Novo agendamento realizado 🚀🚀 \n ` +
          `🗓️ - Data do atendimento: ${msg.data}\n` +
          `🕐 - Horário selecionado: ${msg.data}\n` +
          `📝 - Tipo de serviço: ${msg.servicoSelecionado}\n` +
          `😊 - Nome do cliente: ${msg.nomeCliente}\n` +
          `😎 - Nome do funcionário: ${msg.nomeFuncionario}`
        );
      })
      .join("");

    const phone = "7999902479";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    setDataHours((prevDataHours) =>
      prevDataHours.map((item) => {
        if (selectedTime[item.id]) {
          console.log(item);
          const newItem = { ...item };
          delete newItem[selectedTime[item.id]];
          // Atualiza o documento do Firebase
          updateDoc(doc(db, "horarios", item.id), {
            [selectedTime[item.id]]: "",
          });
          return newItem;
        }
        return item;
      })
    );
    setSelectedTime({});
  }

  return (
    <main className="bg-neutral-700 flex flex-col min-h-svh w-screen">
      <section className="flex flex-col items-center justify-center w-full">
        <div className="flex items-start justify-start w-5/6 mt-4">
          <Link to={"/agendamento"}>
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r
             from-red-200 via-red-300 to-yellow-200 
             hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
              focus:ring-red-100 dark:focus:ring-red-400 font-medium
               rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-md
                shadow-black "
            >
              <AiOutlineLeft />
            </button>
          </Link>
        </div>
        <h1 className="text-white font-semibold mt-1">
          {dataHours <= 0 ? (
            <h1>Nem um horário encontrado.</h1>
          ) : (
            <h1>Agendas livres na data selecionada:</h1>
          )}
        </h1>
        {dataHours
          .filter((item) => item.dataAgendamento === dataSelecionada)
          .map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center m-auto my-3 p-3 bg-neutral-500 rounded-lg  w-5/6  shadow-md shadow-black"
            >
              <div className="w-full">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <img
                      className="max-w-32 mt-3"
                      src={
                        item.id == "Manuela"
                          ? logoManu
                          : item.id == "Monaina"
                          ? logoMona
                          : item.id == "Savio"
                          ? logoSavio
                          : item.id == "Guilherme"
                          ? logoGui
                          : logoCm
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <p>
                      Profissional: <strong>{item.id}</strong>
                    </p>
                    <div>
                      <p>
                        Dia: <strong>{dataSelecionada}</strong>
                      </p>
                    </div>
                    <div className="min-w-full flex items-center justify-center">
                      <p className="border-b-2 my-2 flex gap-1 font-bold text-white min-w-full items-center justify-center">
                        <FcApproval />
                        Horários disponíveis:
                      </p>
                    </div>

                    <div className="gap-2 grid grid-cols-3 mb-4">
                      {[
                        "horasAgendamento1",
                        "horasAgendamento2",
                        "horasAgendamento3",
                        "horasAgendamento4",
                        "horasAgendamento5",
                        "horasAgendamento6",
                        "horasAgendamento7",
                        "horasAgendamento8",
                        "horasAgendamento9",
                        "horasAgendamento10",
                        "horasAgendamento11",
                        "horasAgendamento12",
                      ].map(
                        (hourKey) =>
                          item[hourKey] && (
                            <button
                              key={hourKey}
                              onClick={() => buttonSelect(item.id, hourKey)}
                              className={`${
                                selectedTime[item.id] === hourKey
                                  ? "bg-green-500"
                                  : "bg-white"
                              } flex p-1 rounded-md items-center justify-center gap-2 cursor-pointer`}
                            >
                              {item[hourKey]} <FcCheckmark />
                            </button>
                          )
                      )}
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-end">
                    {[
                      "horasAgendamento1",
                      "horasAgendamento2",
                      "horasAgendamento3",
                      "horasAgendamento4",
                      "horasAgendamento5",
                      "horasAgendamento6",
                      "horasAgendamento7",
                      "horasAgendamento8",
                      "horasAgendamento9",
                      "horasAgendamento10",
                      "horasAgendamento11",
                      "horasAgendamento12",
                    ].every((hourKey) => item[hourKey] === "") ? (
                      <button
                        disabled={true}
                        className="text-gray-900 
                        bg-gradient-to-r from-red-200 via-red-300
                         to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 
                         focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 
                         font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
                         shadow-md shadow-black w-full"
                      >
                        Sem Horários disponíveis
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAgendar(item)}
                        className="text-gray-900 
                        bg-gradient-to-r from-red-200
                         via-red-300 to-yellow-200 
                         hover:bg-gradient-to-bl focus:ring-4 
                         focus:outline-none focus:ring-red-100
                          dark:focus:ring-red-400 font-medium rounded-lg 
                          text-sm px-5 py-2.5 text-center me-2 mb-2 
                          shadow-md shadow-black flex justify-center items-center gap-1"
                      >
                        Agendar <FaWhatsapp color="green" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}
