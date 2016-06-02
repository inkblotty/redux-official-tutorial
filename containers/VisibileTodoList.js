import React from 'react'
import { connect } from 'react-redux'

const getVisibileTodos => (todos, filter) {
	switch (filter) {
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
	}
}

// necessary for using Redux's connect()
/* tells how to transform the Redux store state
	into usable props
*/
const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

// helpful with Redux's dispatch()
// similar to mapStateToProps
const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		}
	}
}

/* connect() generates container components
	that wrap the mapping functions for state and
	dispatch actions */
const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList