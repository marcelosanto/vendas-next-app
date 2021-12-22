import type { NextPage } from 'next'
import Head from 'next/head'

import { Layout } from 'components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vendas App</title>
        <meta name="description" content="Generated br create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Bem vindo <br />
    </div>
  )
}

export default Home
