import React from 'react'
import styled from 'styled-components'
import DashboardIcon from '@mui/icons-material/Dashboard'
import WarningIcon from '@mui/icons-material/Warning'
import BarChartIcon from '@mui/icons-material/BarChart'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import SettingsIcon from '@mui/icons-material/Settings'

import { MenuItemLink } from './MenuItemLink'
import { MenuItemButton } from './MenuItemButton'

const menuItems = [
  {
    text: 'Projects',
    icon: <DashboardIcon />,
    href: '#'
  },
  {
    text: 'Issues',
    icon: <BarChartIcon />,
    href: '#'
  },
  {
    text: 'Alerts',
    icon: <WarningIcon />,
    href: '#'
  },
  {
    text: 'Users',
    icon: <PeopleOutlineIcon />,
    href: '#'
  },
  {
    text: 'Settings',
    icon: <SettingsIcon />,
    href: '#'
  }
]

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  width: 200px;
  height: calc(100vh - 32px);
  background-color: #101828;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const LinkList = styled(List)`
  flex: 1;
`

export const SidebarNavigation = () => {
  return (
    <Nav>
      <LinkList>
        {menuItems.map((item) => (
          <MenuItemLink key={item.href} {...item} />
        ))}
      </LinkList>

      <List>
        <MenuItemButton
          text={'Support'}
          onClick={() => alert('Support')}
          icon={<ChatBubbleIcon />}
        />
        <MenuItemButton
          text={'Collapse'}
          onClick={() => alert('Collapse')}
          icon={<KeyboardBackspaceIcon />}
        />
      </List>
    </Nav>
  )
}
