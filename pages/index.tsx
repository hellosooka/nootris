import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { NavBar } from '../components/NavBar/NavBar'
import { Layout } from '../layout/Layout'


const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <NavBar/>

      
    </Layout>
  )
}

export default Home

//Style
