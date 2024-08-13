import { useState } from "react";

//toast
import toast, { Toaster } from "react-hot-toast";

//firebase
import { db } from "../Components/Firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export function RegistroHorarios() {
  //state horarios
  const [nomeFuncionario, setNomeFuncionario] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState("");
  const [horasAgendamento1, setHorasAgendamento1] = useState("");
  const [horasAgendamento2, setHorasAgendamento2] = useState("");
  const [horasAgendamento3, setHorasAgendamento3] = useState("");
  const [horasAgendamento4, setHorasAgendamento4] = useState("");
  const [horasAgendamento5, setHorasAgendamento5] = useState("");
  const [horasAgendamento6, setHorasAgendamento6] = useState("");
  const [horasAgendamento7, setHorasAgendamento7] = useState("");
  const [horasAgendamento8, setHorasAgendamento8] = useState("");
  const [horasAgendamento9, setHorasAgendamento9] = useState("");
  const [horasAgendamento10, setHorasAgendamento10] = useState("");
  const [horasAgendamento11, setHorasAgendamento11] = useState("");
  const [horasAgendamento12, setHorasAgendamento12] = useState("");
  const [data, setData] = useState([]);

  async function handleRegisterHours(e) {
    e.preventDefault();
    const registeredData = {
      id: nomeFuncionario,
      dataAgendamento: dataAgendamento,
      horasAgendamento1: horasAgendamento1,
      horasAgendamento2: horasAgendamento2,
      horasAgendamento3: horasAgendamento3,
      horasAgendamento4: horasAgendamento4,
      horasAgendamento5: horasAgendamento5,
      horasAgendamento6: horasAgendamento6,
      horasAgendamento7: horasAgendamento7,
      horasAgendamento8: horasAgendamento8,
      horasAgendamento9: horasAgendamento9,
      horasAgendamento10: horasAgendamento10,
      horasAgendamento11: horasAgendamento11,
      horasAgendamento12: horasAgendamento12,
    };
    await setDoc(doc(db, "horarios", `${nomeFuncionario}`), registeredData)
      .then(() => {
        toast.success("Horários registrados com sucesso!");
        setData([...data, registeredData]);
        setNomeFuncionario("");
        setDataAgendamento("");
        setHorasAgendamento1("");
        setHorasAgendamento2("");
        setHorasAgendamento3("");
        setHorasAgendamento4("");
        setHorasAgendamento5("");
        setHorasAgendamento6("");
        setHorasAgendamento7("");
        setHorasAgendamento8("");
        setHorasAgendamento9("");
        setHorasAgendamento10("");
        setHorasAgendamento11("");
        setHorasAgendamento12("");
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  console.log(data);
  return (
    <main className="bg-neutral-700 h-screen flex flex-col items-center justify-center">
      <Toaster position="top-left" reverseOrder={false} />;
      <div className="flex flex-col items-center justify-center m-auto w-full">
        <h1 className="text-center text-white font-bold mt-5">
          Registro de horários
        </h1>
        <form
          onSubmit={handleRegisterHours}
          className="flex flex-col min-w-full p-10"
        >
          <label className="min-w-full mb-2">
            <p className="text-white mt-2">Nome do funcionário:</p>
            <input
              value={nomeFuncionario}
              onChange={(e) => setNomeFuncionario(e.target.value)}
              className="w-full px-2 rounded-md bg-neutral-400 text-white"
            />
          </label>
          <label className="min-w-full mb-2">
            <p className="text-white mt-2">Data:</p>
            <input
              type="date"
              value={dataAgendamento}
              onChange={(e) => setDataAgendamento(e.target.value)}
              className="w-full px-2 rounded-md text-white bg-neutral-400"
            />
          </label>
          <label>
            <p className="text-white my-2 text-center">
              Horarios disponíveis no dia:{" "}
              <strong className="text-white">{dataAgendamento}</strong>
            </p>
          </label>
          <label>
            <input
              className="w-full px-2  bg-neutral-400 rounded-t-lg  text-white font-bold"
              type="time"
              value={horasAgendamento1}
              onChange={(e) => setHorasAgendamento1(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 text-white font-bold"
              type="time"
              value={horasAgendamento2}
              onChange={(e) => setHorasAgendamento2(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 text-white font-bold"
              type="time"
              value={horasAgendamento3}
              onChange={(e) => setHorasAgendamento3(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 text-white font-bold"
              type="time"
              value={horasAgendamento4}
              onChange={(e) => setHorasAgendamento4(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 text-white font-bold"
              type="time"
              value={horasAgendamento5}
              onChange={(e) => setHorasAgendamento5(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 text-white font-bold"
              type="time"
              value={horasAgendamento6}
              onChange={(e) => setHorasAgendamento6(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 text-white font-bold"
              type="time"
              value={horasAgendamento7}
              onChange={(e) => setHorasAgendamento7(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 text-white font-bold"
              type="time"
              value={horasAgendamento8}
              onChange={(e) => setHorasAgendamento8(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 text-white font-bold"
              type="time"
              value={horasAgendamento9}
              onChange={(e) => setHorasAgendamento9(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 text-white font-bold"
              type="time"
              value={horasAgendamento10}
              onChange={(e) => setHorasAgendamento10(e.target.value)}
            />

            <input
              className="w-full px-2 bg-neutral-400  text-white font-bold"
              type="time"
              value={horasAgendamento11}
              onChange={(e) => setHorasAgendamento11(e.target.value)}
            />
            <input
              className="w-full px-2 bg-neutral-400 rounded-b-lg text-white font-bold"
              type="time"
              value={horasAgendamento12}
              onChange={(e) => setHorasAgendamento12(e.target.value)}
            />
          </label>
          <button
            type="submit"
            class="text-gray-900 mt-2 w-full bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}
