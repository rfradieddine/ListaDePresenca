const initialState = {
	students:[]
}

export const SET_STUDENTS = "SET_STUDENTS";

export default function studentsReducer(state = initialState, action) {
	switch(action.type) {
		case SET_STUDENTS :
			return { ...state, students: action.payload };
		default:
			return state;
	}
}