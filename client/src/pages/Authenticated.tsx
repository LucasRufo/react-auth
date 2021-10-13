import { useEffect, useState, useContext } from "react";
import api from "../api/api";
import LoadingSpinner from "../components/LoadingSpinner";
import MainContainer from "../components/MainContainer";

export default function Authenticated() {
  const [guid, setGuid] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<{ guid: string }>('/user')
      .then(response => {
        setGuid(response.data.guid);
        setLoading(false);
        return response;
      })
      .catch(err => setLoading(false))
  }, []);

  if(loading) {
    return (
      <LoadingSpinner/>
    )
  }

  return (
    <MainContainer>
      <div className="mt-20">
        <h1 className="text-4xl text-indigo-700 text-center">Você está autenticado com o GUID: {guid}</h1>
      </div>
    </MainContainer>
  )
}