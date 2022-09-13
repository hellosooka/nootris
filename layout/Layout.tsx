import React from 'react'
import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'

export const Layout = ({children}: LayoutProps) => {
	return (
		<div className={styles.layout}> {children} </div>
	)
}
