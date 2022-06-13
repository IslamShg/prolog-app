import React, { FC } from 'react'
import styled from 'styled-components'

interface MenuItemButtonProps {
  text: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
}

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #f2f4f7;
  margin: 0;
  padding: 0;
  text-decoration: none;
`

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  padding-top: 2px;
  margin-right: 12px;
`

export const MenuItemButton: FC<MenuItemButtonProps> = ({
  onClick,
  icon,
  text
}) => {
  return (
    <ListItem>
      <Button onClick={onClick}>
        <IconWrapper>{icon}</IconWrapper>
        {text}
      </Button>
    </ListItem>
  )
}
