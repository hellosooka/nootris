import React from 'react'
import { NavButtonProps } from './NavButton.props'
import styled from 'styled-components'

export const NavButton = ({ children }: NavButtonProps ) => {
	return (
		<button> {children} </button>
	)
}



