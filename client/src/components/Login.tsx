import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../contexts/AuthContext";
import { User } from "../types/User";
import LoadingSpinner from "./LoadingSpinner";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
	const authContext = useContext(AuthContext);
  const history = useHistory();

  async function authenticateUser(user: User) {
    try {
      setLoading(true);

      await authContext.signIn(user);

      history.push('/authenticated');
    }
    catch (error: any) {
      setLoading(false);
      if (error.response) {
				toast.error('Email ou senha inválidos', {
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

    await authenticateUser(user);
  }

  if (loading) {
    return (
      <LoadingSpinner />
    )
  }

	return (
		<form onSubmit={handleSubmit}>
			<h1 className="text-xl text-gray-800 text-center">Login</h1>
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
				<button type="submit" className="bg-indigo-300 rounded-sm p-2 m-2 transition-colors duration-75 hover:bg-indigo-400">Entrar</button>
				<Link to="/create">
					<button type="button" className="bg-indigo-300 rounded-sm p-2 m-2 transition-colors duration-75 hover:bg-indigo-400">Criar Conta</button>
				</Link>
			</div>
		</form>
	)
}