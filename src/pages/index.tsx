import Head from 'next/head'
import Header from 'components/Header'

import type { NextPage } from 'next'
import Links from 'components/Links'
import Email from 'components/Email'
import Footer from 'components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>OCBC Bank</title>
      </Head>
      <Header />
      <main className="flex flex-col max-w-xl gap-12 mx-auto lg:max-w-3xl">
        
      </main>
    </>
  )
}

export default Home
