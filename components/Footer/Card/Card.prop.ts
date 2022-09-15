import { StaticImageData } from 'next/image'
import React, { ReactNode } from 'react'

export class CardProps {
	img: StaticImageData
	title: string
	subTitle: string
	size: 'big' | 'small'
}