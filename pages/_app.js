import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <UserProvider>
      <Head>
        <link rel="shortcut icon" href="/images/shield.svg" />
        <title>Campaign Tracker</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
    </>
  )
}

export default MyApp
