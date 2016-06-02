import React from 'react'

import Footer from './Footer'

const AddTodo = require('../containers/AddTodo.js');
const VisibleTodoList = require('../containers/VisibleTodoList.js');

/*
import AddTodo from './../containers/AddTodo'
import VisibleTodoList from './../containers/VisibleTodoList'
*/

const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default App