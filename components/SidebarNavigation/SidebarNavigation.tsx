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
  width: 200px;
  height: 100vh;
  background-color: #101828;
`

const List = styled.ul`
  list-style: none;
  padding: 0 16px;
`

export const SidebarNavigation = () => {
  return (
    <Nav>
      <List>
        {menuItems.map((item) => (
          <MenuItemLink key={item.href} {...item} />
        ))}
      </List>

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
