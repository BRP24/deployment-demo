import React from 'react'
import './hero.css'
import playscont from './playscont.png'

const Hero = () => {
	return (
		<div className='hero-content'>
			<div className='hero-text-section'>
				<h1>
					Playstation <br /> Brand New Controller
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure,
					vero eligendi esse quisquam dolore assumenda recusandae aut
					voluptatum! Sequi similique repellat perferendis velit, debitis fugit
					nesciunt libero, neque asperiores odit ratione tempore soluta, placeat
					beatae. Nihil doloribus cum necessitatibus?
				</p>
				<button type='button' className='buy-btn'>Buy it</button>
			</div>
			<div className='bgi-for-image'></div>
			<div className='hero-image-section'>
				<img
					src={playscont}
					alt='ps controller'
				></img>
			</div>
		</div>
	)
}

export default Hero
