import React, { useEffect, useState } from 'react'
import style from './NavBar.module.css'
import { NavButton } from './NavButton/NavButton'
import Logo from './pics/logo.svg'
import { Shop } from './Shop/Shop'





export const NavBar = (): JSX.Element => {

	const [navButtons, setNavButtons] = useState([''])
	const [shopCounter, setShopCounter] = useState(0)

	//Условно беру данные с сервера
	useEffect(() => {
		setNavButtons(['FAQ', 'Оплата и доставка', 'Возврат', 'Исследования', 'Личный кабинет'])
	}, [])
	

	return (
		<div className={style.navigationBar}>
			<button className={style.svg} >
				<Logo />
			</button>
			{navButtons.map((p) => <NavButton key={p} > {p} </NavButton> )}
			<NavButton> 8 8 (800) 600-09-90 </NavButton>
			<Shop count={shopCounter} />
		</div>
	)
}





