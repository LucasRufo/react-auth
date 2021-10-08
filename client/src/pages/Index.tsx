import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import CreateUser from "../components/CreateUser"
import Login from "../components/Login"

export default function Index() {
	return (
		<main className="h-screen flex items-center justify-center">
			<div className="w-[600px] h-[500px] bg-indigo-100 rounded-md flex flex-col items-center justify-center">
				<div className="w-full max-w-sm">
					<Router>
						<Switch>
							<Route path="/create">
								<CreateUser/>
							</Route>
							<Route path="/">
								<Login/>
							</Route>
						</Switch>
					</Router >
				</div>
			</div>
		</main >
	)
}

