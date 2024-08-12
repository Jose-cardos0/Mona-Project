import mona from "../assets/mona.png";

export function Admin() {
  return (
    <main className="bg-neutral-700 flex flex-col h-screen">
      <section className="flex flex-col items-center justify-center m-auto">
        <div className="flex flex-col w-full">
          <p>Área Administrativa</p>
          <div>
            <img className="max-w-60 " src={mona} alt="" />
          </div>
          <div>Faça seu login:</div>
          <form className="flex flex-col">
            <label>Usuário:</label>
            <input type="text" />
            <br />
            <label>Senha:</label>
            <input type="password" />
            <button
              type="submit"
              class="text-gray-900  bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Acessar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
