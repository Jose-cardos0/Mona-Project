import { createContext, useState } from "react";

export const DataSelecionadaContext = createContext();

export const DataSelecionadaProvider = ({ children }) => {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());

  console.log(dataSelecionada);
  return (
    <DataSelecionadaContext.Provider
      value={{ dataSelecionada, setDataSelecionada }}
    >
      {children}
    </DataSelecionadaContext.Provider>
  );
};
