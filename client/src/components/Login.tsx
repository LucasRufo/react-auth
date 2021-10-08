import { Link } from "react-router-dom";

export default function Login() {
	return (
		<form>
			<h1 className="text-xl text-gray-800 text-center">Login</h1>
			<div className="flex flex-col mt-3">
				<label htmlFor="email">Email</label>
				<input className="rounded-sm focus:ring-1 focus:ring-indigo-200" type="text" name="email" id="email" />
			</div>
			<div className="flex flex-col mt-3">
				<label htmlFor="password">Senha</label>
				<input className="rounded-sm focus:ring-1 focus:ring-indigo-200" type="password" name="password" id="password" />
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