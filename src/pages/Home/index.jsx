import React, { useState, useEffect } from "react";
import { Container } from './styles'
import { Card } from "../../components/Card";
import { useSelector, useDispatch } from 'react-redux';
import { setStudents } from "../../action/studentsAction";


export function Home() {
	const [studentName, setStudentName] = useState("");
	const [user, setUser] = useState({ name: '', avatar: '' })
	const students = useSelector((state) => state.studentsReducer.students);
	const dispatch = useDispatch();

	useEffect(() => { //executar algo apos o adicionamento ou carregamento
		dispatch(setStudents(JSON.parse(sessionStorage.getItem('students') || '[]')))
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
		if (studentName?.trim()?.length) {
			const newStudent = {
				name: studentName,
				time: new Date().toLocaleTimeString("pt-BR", {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
				}),
			};
			dispatch(setStudents([...students, newStudent]))
		} else {
			alert("Nome não preenchido!");
		}
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

