import { useContext, useState } from "react";

//img
import cmLogo from "../assets/cmlogo.png";

//links
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//react-icons
import { AiOutlineLeft } from "react-icons/ai";

//firestorage
import { db } from "../Components/Firebase";
import { addDoc, collection } from "firebase/firestore";

//toast
import toast, { Toaster } from "react-hot-toast";

//context
import { DataSelecionadaContext } from "../Components/Context";

export function Agendamento() {
  const [nomeCliente, setNomeCLiente] = useState();

  const [servicoSelecionado, setServicoSelecionado] = useState();

  const {
    dataSelecionada,
    setDataSelecionada,
    setRenderNomeCliente,
    setRenderServico,
  } = useContext(DataSelecionadaContext);

  const navegar = useNavigate();

  async function registroDeDados(e) {
    e.preventDefault();
    try {
      await addDoc(collection(db, "entradaUser"), {
        nome: nomeCliente,
        data: dataSelecionada,
        servico: servicoSelecionado,
      })
        .then(() => {
          toast.success("Procurando agendas...");
          setTimeout(() => {
            navegar("/agenda", { replace: true });
          }, 2000);
          setRenderNomeCliente(nomeCliente);
          setRenderServico(servicoSelecionado);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="min-h-screen">
      <div
        className="flex flex-col min-h-screen w-screen 
      items-center justify-center mx-auto
      bg-neutral-700"
      >
        <main
          className="w-screen min-h-screen
         m-auto items-center justify-center
         p-10"
        >
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
          <Toaster position="top-left" reverseOrder={false} />;
          <div className="flex flex-col justify-center mt-3">
            <h1 className="text-center text-cyan-50 ">FAÇA SEU AGENDAMENTO</h1>
            <div className="flex items-center justify-center w-full mt-3">
              <img className="max-w-60 " src={cmLogo} alt="" />
            </div>

            <form onSubmit={registroDeDados} className="flex flex-col mt-3">
              <input
                type="text"
                placeholder="Digite seu nome..."
                className="p-2 mb-2 bg-neutral-700 border-b-2 text-white uppercase"
                required
                value={nomeCliente}
                onChange={(e) => setNomeCLiente(e.target.value)}
              />
              <input
                type="date"
                className="p-2 mb-2 bg-neutral-700 border-b-2
                 text-cyan-50"
                required
                value={dataSelecionada}
                onChange={(e) => setDataSelecionada(e.target.value)}
              />
              <p className="text-cyan-50 mt-4">Selecione um serviço:</p>
              <select
                className="p-2 mb-2 bg-neutral-700 
              border-b-2 text-cyan-50"
                required
                value={servicoSelecionado}
                onChange={(e) => setServicoSelecionado(e.target.value)}
              >
                <option>Selecione uma opção...</option>
                <option>Massagem esportiva</option>
              </select>
              <div className="flex items-center justify-center my-10 z-50">
                {/* <Link to={"/agenda"}> */}
                <button
                  type="submit"
                  class="text-gray-900  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Agendar !
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
