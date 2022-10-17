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
        <meta name="og:title" content="GM Tracker: Managing Your Campaign Made Easy"></meta>
        <meta property="og:description" content="A new app for managing your campaigns, encounters, custom monsters and more"></meta>
        <meta property="og:image" content="https://gm-tracker.netlify.app/images/bilgewater.jpg"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
    </>
  )
}

export default MyApp
