import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify';
import { User } from "../types/User";
import api from "../api/api";
import LoadingSpinner from "./LoadingSpinner";

export default function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function createUser(user: User) {
    try {
      setLoading(true);

      await api.post('/user', user);

      toast.success('Usuário criado com sucesso', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        progress: undefined,
      });

      history.push('/');
    }
    catch (error: any) {
      setLoading(false);
      if (error.response) {
        toast.error('Erro ao criar usuário', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
        });
      }
      else {
        console.log(error)
      }
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: User = {
      email,
      password
    };

    await createUser(user);
  }

  if (loading) {
    return (
      <LoadingSpinner />
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-xl text-gray-800 text-center">Criar Conta</h1>
      <div className="flex flex-col mt-3">
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="rounded-sm focus:ring-1 focus:ring-indigo-200"
          type="text"
          name="email"
          id="email" />
        <small>{ }</small>
      </div>
      <div className="flex flex-col mt-3">
        <label htmlFor="password">Senha</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="rounded-sm focus:ring-1 focus:ring-indigo-200"
          type="password"
          name="password"
          id="password" />
        <small>{ }</small>
      </div>
      <div className="flex justify-center mt-5">
        <Link to="/">
          <button type="button" className="bg-indigo-300 rounded-sm p-2 m-2 transition-colors duration-75 hover:bg-indigo-400">Voltar</button>
        </Link>
        <button type="submit" className="bg-indigo-300 rounded-sm p-2 m-2 transition-colors duration-75 hover:bg-indigo-400">Criar</button>
      </div>
    </form>
  )
}