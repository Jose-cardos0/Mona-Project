import { createContext, useState } from "react";

export const DataSelecionadaContext = createContext();

export const DataSelecionadaProvider = ({ children }) => {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [renderNomeCliente, setRenderNomeCliente] = useState();
  const [renderServico, setRenderServico] = useState();

  console.log(dataSelecionada);
  return (
    <DataSelecionadaContext.Provider
      value={{
        dataSelecionada,
        setDataSelecionada,
        renderNomeCliente,
        setRenderNomeCliente,
        renderServico,
        setRenderServico,
      }}
    >
      {children}
    </DataSelecionadaContext.Provider>
  );
};
