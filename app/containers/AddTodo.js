import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

/* AddToDo can be rewritten as needed, hence 'let'
	*/

let AddToDo = ({ dispatch }) => {
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