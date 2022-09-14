import React from 'react'
import { NavButtonProps } from './NavButton.props'
import style from './NavButton.module.css'

export const NavButton = ({ children }: NavButtonProps ) => {
	return (
		<button className={style.button}> {children} </button>
	)
}



