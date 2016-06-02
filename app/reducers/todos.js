/* todo takes in the state of ONE todo
	and outputs a new state for that todo
	based on the action */
const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state
			}

			return Object.assign({}, state, {
				completed: !state.completed
			})

		default:
			return state
	}
}

/* todos changes the entire application state */
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'TOGGLE_TODO':
			return state.map(t => 
				todo(t, action)
			)
		default:
			return state
	}
}

export default todos