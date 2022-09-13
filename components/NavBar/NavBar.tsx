import React from 'react'
import styled from 'styled-components'
import { NavButton } from './NavButton/NavButton'
import Image from 'next/image'


const arr = ['FAQ', 'Оплата и доставка', 'Возврат', 'Исследования', 'Личный кабинет']

export const NavBar = (): JSX.Element => {
	return (
		<NavigationBar>
			<Image src={'/logo.svg'} width={135} height={20} />
			{arr.map((p) => <Button key={p} > {p} </Button> )}
			<Button> 8 8 (800) 600-09-90 </Button>
			<Image src={'/Shop.svg'} width={32} height={28} />
		</NavigationBar>
	)
}

//Style
const NavigationBar = styled.div`
	display: grid;
	grid-auto-flow: column;
	width: 100%;
	height: 80px;
	position: absolute;
	background: #111111;
	@media(max-width: 1100px) {
		grid-auto-flow: row;
	}
	
`

const Button = styled.button`
	font-family: 'Rubik';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 24px;
	border: none;
	color: white;
	background: #111111;
	@media(max-width: 1100px) {
		padding: 20px 0px;
		
	}
`

