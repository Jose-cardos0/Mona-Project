import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Components/Firebase";
import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export function Protect({ children }) {
  const [loading, setLoading] = useState(true);
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const eyes = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setLogado(true);
      } else {
        setLoading(false);
        setLogado(false);
        navigate("/admin", { replace: true });
      }
    });

    return () => {
      eyes();
    };
  }, []);

  if (loading) {
    return (
      <div
        className="bg-neutral-700 w-full min-h-screen
       text-white font-bold text-center m-auto"
      >
        Carregando...
      </div>
    );
  }

  if (!logado) {
    return <Navigate to="/adminregistros" />;
  }

  return children;
}
