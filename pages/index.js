import connectToDatabase from '../utils/mongodb'
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css'

export default function Home({ }) {
  const { user, error, isLoading } = useUser();
  console.log(user)
  
  return (
    <>
        <Nav location='home'></Nav>

        <section>
            {!user && <div className="one-column">
                <h2 className={styles.column_title}>Login</h2>
                <div className={styles.columns}>
                  <div className={styles.card}>
                    <h2>Please login to access the application</h2>
                    <Link href='/api/auth/login'><button className={styles.button_blue}>Log In</button></Link>
                  </div>
                </div>
            </div>}

            {user &&<div className="one-column">
                <h2 className={styles.column_title}>Welcome {user.given_name} {user.nickname}</h2>
                <div className={styles.card}>
                  <p>Please go to the campaigns page to create and view campaigns</p>
                  <Link href='/campaigns'><button className={styles.button_green}>Campaigns page</button></Link>
                  </div>

                  <div className={styles.card}>
                  <p>Log out of you account</p>
                  <Link href='/api/auth/logout'><button className={styles.button_red}>Log Out</button></Link>
                </div>
            </div>}

            <div className="one-column">
              <h2 className={styles.column_title}>Anouncements</h2>
              <div className={styles.card}>
                <h2>Expect Bugs</h2>
                <p>This application is in alpha, which means it is not ready for production use. If you have access to the application it is for testing purposes only.</p>
                <p>Expect bugs and unfinished features.</p>
                <p>The developers would appreciate it if you can report any bugs you find to the<Link href='https://github.com/S-North/DnD-NextJs-MongoDb/issues'><a className={styles.link}> Github page here.</a></Link></p>
                <p>Or if you don't have direct access to this private repo, <Link href='https://discord.gg/Xfbn67J6H9'><a className={styles.link}>join the discord</a></Link></p>
              </div>
            </div>
        </section>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    await connectToDatabase
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
