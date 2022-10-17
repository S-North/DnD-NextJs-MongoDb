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
        <title>GM Tracker</title>
        <meta name="og:title" content="GM Tracker: Managing Your D&D 5e Campaign, Made Easy"></meta>
        <meta property="og:description" content="A free and open source web app for managing your d&d 5E campaigns, encounters, custom monsters and more."></meta>
        <meta property="og:image" content="https://res.cloudinary.com/dgseq0kkm/image/upload/v1666011740/gm-tracker/gm-tracker_vqc9jx.png"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
    </>
  )
}

export default MyApp
