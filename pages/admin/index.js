import connectToDatabase from '../../utils/mongodb'
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Nav from '../../components/Nav';

export default withPageAuthRequired(function Admin({ user }) {
    const admin = user.permission === 'admin'
    console.log(admin)

    return (
        <>
        <Nav location="admin" user={user}></Nav>
        {user.permission === 'admin' &&
            <section>
                <div className="column-wide">
                    <h2>Controls</h2>

                </div>
            </section>
        }
        </>
    )

})

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