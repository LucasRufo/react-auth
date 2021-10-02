import { ReactNode } from "react";

export default function MainContainer(props: { children: ReactNode }) {
	return (
		<div className="w-2/3 h-screen m-auto">
			{props.children}
		</div>
	)
}