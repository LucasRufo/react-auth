import { Link } from "react-router-dom";
import { useState } from "react";
import { AxiosError } from "axios";
import api from "../api/api";

export default function CreateUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = {
      email,
      password
    };

    try {
      const response = await api.post('user', user);
    }
    catch (error: any) {
      if(error.response) {
        console.log(error.response)
      } 
      else {
        console.log(error.response)
      }
    }
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