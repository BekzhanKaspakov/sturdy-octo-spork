import React from 'react';

const Main = () => {
	console.log(localStorage.getItem('user'))
  return (
		<div>
			<h2>Main Page</h2>
			@{localStorage.getItem('ACCESS_TOKEN')}
		</div>
	)
}

export default Main;
