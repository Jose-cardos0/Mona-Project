import { db } from "../Components/Firebase";
import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

export function AgendasAbertas() {
  const [documentData, setDocumentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDatas() {
      try {
        const querySnapshot = await getDocs(collection(db, "horarios"));
        const docsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDocumentData(docsArray);
      } catch (error) {
        console.log("Erro ao buscar documentos:", error);
      } finally {
        setLoading(false);
      }
    }

    getDatas();
  }, []);

  console.log(documentData);
  if (loading) {
    return (
      <div
        className="flex flex-col 
      items-center justify-center
       h-screen bg-gray-900"
      >
        <div
          className="w-16 h-16 border-4 border-t-4
         border-orange-500 border-solid
          rounded-full animate-spin"
        ></div>
        <p
          className="mt-4 text-white
         text-lg"
        >
          Carregando...
        </p>
      </div>
    );
  }

  async function handleRemoveAgend(item) {
    try {
      const docRef = doc(db, "horarios", item);
      await deleteDoc(docRef);
      setDocumentData(documentData.filter((doc) => doc.id != item));
    } catch (error) {
      console.error("Erro ao excluir documento: ", error);
    }
  }

  return (
    <main
      className="bg-neutral-700 h-screen flex flex-col
     items-center justify-center "
    >
      <Link to={"/adminregistros"}>
        <button
          className="text-gray-900  bg-gradient-to-r 
                      from-red-200 via-red-300 to-yellow-200 
                      hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                      focus:ring-red-100 dark:focus:ring-red-400 font-medium 
                      rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 shadow-md shadow-black"
        >
          <p>Agendamento</p>
        </button>
      </Link>
      <h1 className="text-3xl text-white font-bold mb-4">Agendas abertas</h1>
      <table
        className="border-collapse border-white bg-neutral-400
       my-20 shadow-md shadow-black"
      >
        <thead>
          <tr>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              Funcionário
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H1
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H2
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H3
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H4
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H5
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H6
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H7
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H8
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H9
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H10
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H11
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              H12
            </th>
            <th className="p-3 text-left border-b-2 border-white bg-orange-400 text-white">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {documentData.map((horarios) => (
            <tr key={doc.id} className=" even:bg-gray-300">
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.id}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento1}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento2}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento3}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento4}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento5}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento6}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento7}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento8}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento9}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento10}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento11}
              </td>
              <td className="p-3 text-left border-b-2 border-l-2 border-white cursor-pointer">
                {horarios.horasAgendamento12}
              </td>

              <td className=" text-left border-b-2 border-white cursor-pointer">
                <button
                  onClick={() => handleRemoveAgend(horarios.id)}
                  className="text-gray-900  bg-gradient-to-r 
                      from-red-200 via-red-300 to-yellow-200 
                      hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                      focus:ring-red-100 dark:focus:ring-red-400 font-medium 
                      rounded-lg text-xs px-5 py-2.5 text-center me-2 mb-2 shadow-md shadow-black"
                >
                  <p>Excluir Agenda</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
