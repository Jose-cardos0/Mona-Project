import { useState } from "react";
import mona from "../assets/mona.png";

//router-dom
import { Link, useNavigate } from "react-router-dom";

//icons
import { AiOutlineLeft } from "react-icons/ai";

//toast
import toast, { Toaster } from "react-hot-toast";

//autenticacao
import { auth } from "../Components/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function Admin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (login === "" || password === "") {
      toast.error("Preencha todos os campos");
      return;
    }

    await signInWithEmailAndPassword(auth, login, password)
      .then(() => {
        setTimeout(() => {
          toast.success("Logado com sucesso!");
        }, [1000]);

        navigate("/adminregistros");
      })
      .catch((error) => {
        console.log(error.message);

        if (error.message) {
          toast.error("Credenciais inválidas");
        }
      });
  }

  return (
    <main className="bg-neutral-700 flex flex-col min-h-screen w-full">
      <section className="flex flex-col items-center justify-center min-w-full min-h-full p-10">
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-5 sm:w-96 sm:m-auto"
          >
            <input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" text-cyan-50  
              outline-none rounded-md p-2 bg-transparent border-b-2
              focus:border-b-4 focus:border-orange-300 focus:bg-transparent shadow-md shadow-black "
              placeholder="Digite sua senha..."
            />

            <button
              type="submit"
              class="text-gray-900 w-full mt-5 bg-gradient-to-r from-red-200 
                 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 
                 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium 
                 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-md shadow-black"
            >
              Acessar
            </button>
          </form>
        </div>
      </section>
      <Toaster position="top-left" reverseOrder={false} />;
    </main>
  );
}
