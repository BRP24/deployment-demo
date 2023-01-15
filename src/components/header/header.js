import React from 'react'
import './header.css'

const Header = () => {
	return (
		<div className='navigation'>
			<div className='logo'>
				<a href='/'>Company</a>
			</div>
			<ul className='navbar-list'>
				<li className='navbar-item'>
					<a href='/'>Home</a>
				</li>
				<li className='navbar-item'>
					<a href='/'>About</a>
				</li>
				<li className='navbar-item'>
					<a href='/'>Contact</a>
				</li>
			</ul>
		</div>
	)
}

export default Header
