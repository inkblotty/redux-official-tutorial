import React from 'react'
import FilterLink from '../containers/FilterLink'

/* pure presentational component;
	wraps all the FilterLinks and gives them
	their filter property
*/

const Footer = () => (
		<p>
			Show: {" "}
			<FilterLink filter="SHOW_ALL">
				All
			</FilterLink>
			{", "}
			<FilterLink filter="SHOW_ACTIVE">
				Active
			</FilterLink>
			{", "}
			<FilterLink filter="SHOW_COMPLETED">
				Completed
			</FilterLink>
		</p>
);

export default Footer