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
import { Routes } from '../../config/routes'
import { useRouter } from '../../__mocks__/next/router'

const menuItems = [
  {
    text: 'Projects',
    icon: <DashboardIcon />,
    href: Routes.projects
  },
  {
    text: 'Issues',
    icon: <BarChartIcon />,
    href: Routes.issues
  },
  {
    text: 'Alerts',
    icon: <WarningIcon />,
    href: Routes.alerts
  },
  {
    text: 'Users',
    icon: <PeopleOutlineIcon />,
    href: Routes.users
  },
  {
    text: 'Settings',
    icon: <SettingsIcon />,
    href: Routes.settings
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
  const router = useRouter()
  return (
    <Nav>
      <LinkList>
        {menuItems.map((item) => (
          <MenuItemLink
            key={item.href}
            {...item}
            isActive={router.pathname === item.href}
          />
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
