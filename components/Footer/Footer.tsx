import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import { CardProps } from './Card/Card.prop'
import style from './Footer.module.css'
import Ginger from './pics/ginger.png'
import Tables from './pics/nootris.png'
import Virus from './pics/vorus.png'


const arr: CardProps[] = [
	{
		title: "Содержит",
		subTitle: "имбирь",
		img: Ginger,
		size: "small"
	},
	{
		title: "+ Бесплатная доставка",
		subTitle: "Специальная цена",
		img: Tables,
		size: "big"
	},
	{
		title: "Нейтрализует",
		subTitle: "вирусы",
		img: Virus,
		size: "small"
	},
	

]

export default function Footer() {

	const [pics, setPics] = useState(arr)

	//Условно фетчу данные с сервера
	useEffect(() => {
		setPics(arr)
	}, [])
	

	return (
		<div className={style.container} >
			<div className={style.titles} >
				<h1 className={style.TitleWhite} >  ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА </h1>
				<h1 className={style.TitleOrange} > СО СКИДКОЙ -15% ПЕРВЫМ! </h1>
			</div>

			<div className={style.prices} >
				<h2 className={style.oldPrice} > 750₽ </h2>
				<h2 className={style.newPrice} > 690₽ </h2>
			</div>

			<div className={style.pics} >
				{pics.map((props) => <Card {...props} /> )}
			</div>


			<button className={style.buyButton} > Оформить заказ! </button>

		</div>
	)
}
