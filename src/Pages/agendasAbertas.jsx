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
import { AiOutlineLeft } from "react-icons/ai";
import { IoTrashBinOutline } from "react-icons/io5";

export function AgendasAbertas() {
  const [documentData, setDocumentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [widthResize, setWidthResize] = useState(false);

  useEffect(() => {
    const refreshResize = () => {
      const widhtResize = window.innerWidth;
      console.log(widhtResize);
      if (widhtResize < 480) {
        setWidthResize(true);
      } else {
        setWidthResize(false);
      }
    };

    refreshResize();
    window.addEventListener("resize", refreshResize);
    return () => {
      window.removeEventListener("resize", refreshResize);
    };
  }, []);

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
    <main className="bg-neutral-700 h-screen flex flex-col items-center justify-center">
      <section className="flex-col items-center justify-center max-md:w-10/12 max-md:h-5/6">
        <div className="flex items-center justify-between mb-4">
          <Link to={"/adminregistros"}>
            <button
              className="text-gray-900  bg-gradient-to-r 
                    from-red-200 via-red-300 to-yellow-200 
                    hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
                    focus:ring-red-100 dark:focus:ring-red-400 font-medium 
                    rounded-lg cursor-pointer
                    text-xs px-5 py-2.5 text-center me-2 mb-2 shadow-md shadow-black"
            >
              <AiOutlineLeft />
            </button>
          </Link>
          <h1 className="text-3xl text-white font-bold">Agendas abertas</h1>
        </div>
        {widthResize ? (
          <table
            className="border-collapse border
           border-gray-600 bg-gray-700 w-full shadow-lg"
          >
            <thead className="bg-gray-600 text-white">
              <th className="p-3 border-b border-gray-500 text-center w-full">
                Funcionário
              </th>
              <th className="p-3 border-b border-gray-500 text-center w-full">
                Horarios
              </th>
              <th className="p-3 border-b border-gray-500 text-center w-full">
                Ações
              </th>
            </thead>
            <tbody>
              {documentData.map((horarios) => (
                <tr
                  className="even:bg-gray-600 hover:bg-gray-500 transition duration-300 text-center"
                  key={horarios.id}
                >
                  <td className="border-b border-gray-500 text-white">
                    {horarios.id}
                  </td>
                  <td className="border-b border-gray-500 text-white">
                    <div className="flex-col items-center justify-center">
                      <div className="text-center">
                        {horarios.horasAgendamento1}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento2}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento3}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento4}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento5}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento6}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento7}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento8}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento9}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento10}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento11}
                      </div>
                      <div className="text-center">
                        {horarios.horasAgendamento12}
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-500 text-center">
                    <button
                      onClick={() => handleRemoveAgend(horarios.id)}
                      className="flex items-center
                   justify-center gap-1 text-white
                    bg-red-500 hover:bg-red-600 rounded-lg
                     px-2 py-1 transition duration-300"
                    >
                      Excluir <IoTrashBinOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table
            className="border-collapse border
           border-gray-600 bg-gray-700 w-full shadow-lg"
          >
            <thead>
              <tr className="bg-gray-600 text-white">
                <th className="p-3 border-b border-gray-500">Funcionário</th>
                <th className="p-3 border-b border-gray-500">H1</th>
                <th className="p-3 border-b border-gray-500">H2</th>
                <th className="p-3 border-b border-gray-500">H3</th>
                <th className="p-3 border-b border-gray-500">H4</th>
                <th className="p-3 border-b border-gray-500">H5</th>
                <th className="p-3 border-b border-gray-500">H6</th>
                <th className="p-3 border-b border-gray-500">H7</th>
                <th className="p-3 border-b border-gray-500">H8</th>
                <th className="p-3 border-b border-gray-500">H9</th>
                <th className="p-3 border-b border-gray-500">H10</th>
                <th className="p-3 border-b border-gray-500">H11</th>
                <th className="p-3 border-b border-gray-500">H12</th>
                <th className="p-3 border-b border-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody>
              {documentData.map((horarios) => (
                <tr
                  key={horarios.id}
                  className="even:bg-gray-600 hover:bg-gray-500 transition duration-300"
                >
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.id}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento1}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento2}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento3}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento4}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento5}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento6}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento7}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento8}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento9}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento10}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento11}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-white">
                    {horarios.horasAgendamento12}
                  </td>
                  <td className="p-3 border-b border-gray-500 text-center">
                    <button
                      onClick={() => handleRemoveAgend(horarios.id)}
                      className="flex items-center
                   justify-center gap-1 text-white
                    bg-red-500 hover:bg-red-600 rounded-lg
                     px-2 py-1 transition duration-300"
                    >
                      Excluir <IoTrashBinOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}
