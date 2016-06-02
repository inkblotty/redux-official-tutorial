let nextTodoId = 0

/* all of these actions take in a string
	and return a Redux-usable action object */
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}

export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}