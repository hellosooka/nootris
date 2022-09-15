import React from 'react'
import { ShopProps } from './Shop.props'
import Image from 'next/image'
import style from './Shop.module.css'
import Icon from '../pics/Shop.svg'

export const Shop = ({ count }: ShopProps) => {
	return (
		<button className={style.button} >
			<Icon />
			<p className={style.counter} > { count } </p>
		</button>
	)
}
