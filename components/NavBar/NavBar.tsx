import React from 'react'
import style from './NavBar.module.css'
import { NavButton } from './NavButton/NavButton'

import Logo from './pics/logo.svg'
import Shop from './pics/Shop.svg'




const arr = ['FAQ', 'Оплата и доставка', 'Возврат', 'Исследования', 'Личный кабинет']

export const NavBar = (): JSX.Element => {
	return (
		<div className={style.navigationBar}>
			<button className={style.svg} >
				<Logo />
			</button>
			{arr.map((p) => <NavButton key={p} > {p} </NavButton> )}
			<NavButton> 8 8 (800) 600-09-90 </NavButton>
			<button className={style.svg}>
				<Shop />
			</button>
		</div>
	)
}





