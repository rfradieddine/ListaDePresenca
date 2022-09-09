import React, { useState, useEffect } from "react";
import { Container } from './styles'
import { Card } from "../../components/Card";

export function Home() {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students') || '[]'));
	const [user, setUser] = useState({ name: '', avatar: '' })

	useEffect(() => { //executar algo apos o adicionamento ou carregamento
		fetch('https://api.github.com/users/gabrielhrp31')
			.then(response => response.json())
			.then(data => {
				setUser({
					name: data.name,
					avatar: data.avatar_url,
				})
			});
	}, []);

	function handleAddStudent() {
		const newStudent = {
			name: studentName,
			time: new Date().toLocaleTimeString("pt-BR", {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
			}),
		};

		setStudents((prevState) => [...prevState, newStudent]);
	}


	return (
		<Container>
			<header>
				<h1>Lista de Presença</h1>
				<div>
					<strong>{user.name}</strong>
					<img src={user.avatar} alt="Foto de perfil" />
				</div>
			</header>
			<input
				type="text"
				placeholder="Digite o nome..."
				onChange={(e) => setStudentName(e.target.value)}
			/>
			<button type="button" onClick={handleAddStudent}>
				Adicionar
			</button>

			{students.map((student) => (
				<Card
					key={student.time} //alerta excluido
					name={student.name}
					time={student.time}
				/>
			))}
		</Container>
	);
}

