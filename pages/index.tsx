import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import styles from '../styles/Home.module.css'

type ContainerProps = {
  theme: string
}

const Container = styled.div<ContainerProps>` 
  padding: 0 20em;
  ${(props) => props.theme === 'dark' && 'background: black'}
`

const Home: NextPage = () => {
  return (
    <Container theme="light" className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Title here</h1>
      </main>

      <footer className={styles.footer}></footer>
    </Container>
  )
}

export default Home
