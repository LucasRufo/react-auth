import { ReactNode } from "react";

export default function MainContainer(props: { children: ReactNode }) {
	return (
		<div className="max-w-4xl h-screen m-auto">
			{props.children}
		</div>
	)
}