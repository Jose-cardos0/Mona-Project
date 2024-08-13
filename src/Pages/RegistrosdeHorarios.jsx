import { useState } from "react";

export function RegistroHorarios() {
  const [dataDsp, setDataDsp] = useState();
  return (
    <main className="bg-neutral-200 h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center m-auto w-full">
        <h1 className="text-center">Registro de horários</h1>
        <form className="flex flex-col min-w-full p-10">
          <label className="min-w-full mb-2">
            <p>Nome do funcionário:</p>
            <input type="text" className="w-full px-2" />
          </label>
          <label className="min-w-full mb-2">
            <p>Segunda-feira:</p>
            <input
              type="date"
              value={dataDsp}
              onChange={(e) => setDataDsp(e.target.value)}
              className="w-full px-2"
            />
          </label>
          <label>
            <p>
              Horarios disponíveis no dia: <strong>{dataDsp}</strong>
            </p>
          </label>
          <label className="flex gap-2 border-b-2 border-gray-400 py-2 items-center justify-center">
            <p>08:00 às 09:00</p>
            <input type="checkbox" />
          </label>
          <label className="flex gap-2 border-b-2 border-gray-400 py-2 items-center justify-center">
            <p>09:00 às 10:00</p>
            <input type="checkbox" />
          </label>
          <label className="flex gap-2 border-b-2 border-gray-400 py-2 items-center justify-center">
            <p>11:00 às 12:00</p>
            <input type="checkbox" />
          </label>
          <label className="flex gap-2 border-b-2 border-gray-400 py-2 items-center justify-center">
            <p>13:00 às 14:00</p>
            <input type="checkbox" />
          </label>
          <label className="flex gap-2 border-b-2 border-gray-400 py-2 items-center justify-center">
            <p>14:00 às 15:00</p>
            <input type="checkbox" />
          </label>
          <label className="flex gap-2 border-b-2 border-gray-400 py-2 items-center justify-center">
            <p>15:00 às 16:00</p>
            <input type="checkbox" />
          </label>
          <label className="flex gap-2 border-b-2 border-gray-400 py-2 items-center justify-center">
            <p>16:00 às 17:00</p>
            <input type="checkbox" />
          </label>
          <label className="flex gap-2 border-b-2 border-gray-400 py-2 items-center justify-center">
            <p>17:00 às 18:00</p>
            <input type="checkbox" />
          </label>
          <button
            type="submit"
            className="p-2 mt-5 border cursor-pointer rounded-lg bg-slate-400 text-cyan-50 hover:bg-black "
          >
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}
