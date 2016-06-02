import React, { PropTypes } from 'react'

import Todo from './Todo'

/* wraps all the todos;
	stateless component receives props
	and passes onTodoClick event handler
	on to each Todo
*/

/* {...todo} passes in the todo with
	all its properties without having to type
	todo={todo}
*/

const TodoList = ({ todos, onTodoClick }) => (
	<ul>
		{ todos.map(todo => {
			return (
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => onTodoClick(todo.id)} />
			)
		})}
	</ul>
)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList