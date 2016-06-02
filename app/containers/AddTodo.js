import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/* AddToDo can be rewritten as needed, hence 'let'
	*/
/* takes in actions and outputs a form element
	that uses that action onSubmit */

let AddTodo = ({ dispatch }) => {
	let input

	return (
		<div>
			<form onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) {
						return
					}
					dispatch(addTodo(input.value))
					input.value = ''
				}}>
					<input ref={node => {
						input = node
					}} />
					<button type="submit">
						Add Todo
					</button>
				</form>
		</div>
	)
}

AddTodo = connect()(AddTodo)

export default AddTodo