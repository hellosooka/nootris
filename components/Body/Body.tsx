import React from 'react'
import style from './Body.module.css'
import Bg1 from './pics/bg1.svg'
import Bg2 from './pics/bg2.svg'
import Bg3 from './pics/bg3.svg'
import Bg4 from './pics/bg4.svg'
import Bg5 from './pics/bg5.svg'
import Bg6 from './pics/bg6.svg'
import Bg7 from './pics/bg7.svg'

import Tables from './pics/tables.png'
import Ginger from './pics/ginger.png'
import Lemon from './pics/lemon.png'

import classNames from 'classnames'
import Image from 'next/image'

export const Body = () => {
	return (
		<div className={style.container}>
			<Bg2 className={classNames(style.bg, style.bg2)} />
			<Bg3 className={classNames(style.bg, style.bg3)} />
			<Bg4 className={classNames(style.bg, style.bg4)} />
			<Bg7 className={classNames(style.bg, style.bg7)} />
			<Bg1 className={classNames(style.bg, style.bg1)} />
			<Bg5 className={classNames(style.bg, style.bg5)} />
			<Bg6 className={classNames(style.bg, style.bg6)} />

			<div className={style.content} >
				
				<div className={style.ginger}>
					<Image src={Ginger} />
				</div>
				<div className={style.tables}>
					<Image src={Tables} />
				</div>
				<div className={style.lemon} >
					<Image src={Lemon} />
				</div>

				<h1 className={style.title} > АКТИВИРУЙ ИММУНИТЕТ! </h1>
				<h3 className={style.subtitle} > Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма </h3>
				
				<h4 className={style.infoTitle} > NOOTRIS ПОМОГАЕТ </h4>
				<h5 className={style.infoSubTitle} > Вашему организму во время пандемии и сезонных простуд </h5>
			</div>
			

		</div> 
	)
}
