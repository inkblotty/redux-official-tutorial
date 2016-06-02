import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// modules
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

/* Provider passes in the store to all
	components that need it instead of having
	to declare it explicitly in each component */
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)