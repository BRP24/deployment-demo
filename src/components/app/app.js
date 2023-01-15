import React from 'react'
import './app.css'
import Header from '../header/header'
import Hero from '../hero/hero'

const App = () => {
	return (
		<div>
			<div className='container'>
				<Header />
				<Hero />
			</div>
		</div>
	)
}

export default App
