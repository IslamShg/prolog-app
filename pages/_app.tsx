import type { AppProps } from 'next/app'

import { NavigationProvider } from '../contexts/Navigation'
import { GlobalStyle } from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </NavigationProvider>
    </>
  )
}

export default MyApp
