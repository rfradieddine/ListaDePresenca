import { SET_STUDENTS } from "../reducers/studentsReducer"

export const setStudents = (students)=>{
	sessionStorage.setItem('students',JSON.stringify(students))	
	return {
		type: SET_STUDENTS,
		payload: students
	}
}