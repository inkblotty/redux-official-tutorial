import React from 'react'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleToDoList from '../containers/VisibleToDoList'

const App = () => (
	<div>
		<AddTodo />
		<VisibleToDoList />
		<Footer />
	</div>
)

export default App