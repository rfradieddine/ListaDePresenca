import { CardWrapper } from "./styles.js";

export function Card(props) {
	return (
		<CardWrapper>
			<strong>{props.name}</strong>
			<small>{props.time}</small>
		</CardWrapper>
	);
}
