/* taking in the application state,
	and returning a new application state 
	with a new visibility filter based on
	the action dispatched */
const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}	
}

export default visibilityFilter