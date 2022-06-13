import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface MenuItemLinkProps {
  text: string
  href?: string
  isActive?: boolean
  onClick?: () => void
  icon?: React.ReactNode
  isCollapsed: boolean
}

const ListItem = styled.li<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  background: ${(props) => (props.isActive ? '#344054' : 'transparent')};
  border-radius: 8px;

  &:first {
    margin-top: 0;
  }
`

const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: #f2f4f7;
  text-decoration: none;
`

const IconWrapper = styled.span`
  margin-right: 12px;
`

export const MenuItemLink: FC<MenuItemLinkProps> = ({
  href,
  text,
  icon,
  isActive = false,
  isCollapsed
}) => {
  return (
    <ListItem isActive={isActive}>
      <Link passHref href={href || ''}>
        <Anchor>
          <IconWrapper>{icon}</IconWrapper>
          {!isCollapsed && text}
        </Anchor>
      </Link>
    </ListItem>
  )
}
