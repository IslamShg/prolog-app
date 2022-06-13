import BarChartIcon from '@mui/icons-material/BarChart'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import DashboardIcon from '@mui/icons-material/Dashboard'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import SettingsIcon from '@mui/icons-material/Settings'
import WarningIcon from '@mui/icons-material/Warning'
// import { useRouter } from 'next/router'
import { useContext } from 'react'
import styled from 'styled-components'

import { Routes } from '../../config/routes'
import { NavigationContext } from '../../contexts/Navigation'
import { useRouter } from '../../__mocks__/next/router'
import { MenuItemButton } from './MenuItemButton'
import { MenuItemLink } from './MenuItemLink'

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

const Nav = styled.nav<{ collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  width: ${({ collapsed }) => (collapsed ? '50px' : '200px')};
  height: calc(100vh - 32px);
  background-color: #101828;
  transition: 0.2s all;
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
  const { isSidebarCollapsed, toggleSidebarNavigation } =
    useContext(NavigationContext)

  return (
    <Nav collapsed={isSidebarCollapsed}>
      <LinkList>
        {menuItems.map((item) => (
          <MenuItemLink
            isCollapsed={isSidebarCollapsed}
            key={item.href}
            {...item}
            isActive={router.pathname === item.href}
          />
        ))}
      </LinkList>

      <List>
        <MenuItemButton
          isCollapsed={isSidebarCollapsed}
          text={'Support'}
          onClick={() => alert('Support')}
          icon={<ChatBubbleIcon />}
        />
        <MenuItemButton
          isCollapsed={isSidebarCollapsed}
          text={'Collapse'}
          onClick={toggleSidebarNavigation}
          icon={<KeyboardBackspaceIcon />}
        />
      </List>
    </Nav>
  )
}
