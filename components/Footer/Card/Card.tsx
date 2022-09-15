import React from 'react'
import { CardProps } from './Card.prop'
import Image from 'next/image'
import style from './Card.module.css'


export default function Card({img, title, subTitle, size}: CardProps) {
	return (
		<>
			{ size == 'small' ? 
			<div>
				<div className={style.image}>
					<Image src={img} alt={''} />
				</div>
				<h3 className={style.titleSmall} > {title} </h3>
				<h3 className={style.subtitleSmall} > {subTitle} </h3>
			</div> 
			: 
			<div>
				<div className={style.image}>
					<Image src={img} alt={''} />
				</div>
				<h3 className={style.titleBig} > {title} </h3>
				<h3 className={style.subtitleBig} > {subTitle} </h3>
			</div> }
		</>
	)
}
