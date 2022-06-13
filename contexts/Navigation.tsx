import React, { createContext, useState } from 'react'

type NavigationContextProviderProps = {
  children: React.ReactNode
}

type ContextType = {
  isSidebarCollapsed: boolean
  toggleSidebarNavigation: () => void
}

const defaultContext: ContextType = {
  isSidebarCollapsed: false,
  toggleSidebarNavigation() {}
}

export const NavigationContext = createContext(defaultContext)

export const NavigationProvider = ({
  children
}: NavigationContextProviderProps) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(
    defaultContext.isSidebarCollapsed
  )

  return (
    <NavigationContext.Provider
      value={{
        isSidebarCollapsed,
        toggleSidebarNavigation: () => setSidebarCollapsed((prev) => !prev)
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
