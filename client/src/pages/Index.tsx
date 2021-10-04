function Index() {
	return (
		<main className="h-screen flex items-center justify-center">
			<div className="w-[600px] h-[500px] bg-indigo-100 rounded-md flex flex-col items-center justify-center">
				<div className="w-[300px] h-[250px]">
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
						<button type="submit" className="bg-indigo-300 rounded-sm p-2 m-2">Entrar</button>
						<button type="button" className="bg-indigo-300 rounded-sm p-2 m-2">Esqueci minha senha</button>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Index