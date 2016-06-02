import React, { PropTypes } from 'react'

/* renders single todo element;
	all event handling functionality
	is passed through props
*/

const Todo = ({ onClick, completed, text }) => (
	<li
		onClick={onClick}
		style={{
			textDecoration: completed? 'line-through' : 'none'
		}}>
		{text}
	</li>
)

ToDo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo;