import Link from 'next/link';
import { useEffect, useState } from 'react'
import navStyles from './Nav.module.css'
import { useRouter } from "next/router";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Nav = ({campaign, adventure, encounter, user, location}) => {
    const { query, pathname, isReady } = useRouter()
    const path = pathname.split("/")[1]
    const id = query.id
    console.log(path)
    // console.log(id)

    useEffect(() => {
      if (localStorage.sidebar === undefined) {
        localStorage.sidebar = 'open'
      }
    
      return () => {}
    }, [])    
    
    return (
        <header className={navStyles.header}>
            <nav className={navStyles.nav}>
                <Link
                    href='/'
                    className={pathname === '/' ? navStyles.selected : navStyles.unselected}>Home | </Link>
                {user && user.permission === 'admin' && <Link
                    href='/admin'
                    className={pathname === '/admin' ? navStyles.selected : navStyles.unselected}>Admin | </Link>}
                {user &&
                    <Link
                        href={`/campaigns`}
                        className={['/campaigns', '/campaign/[id]', '/encounter/[id]', '/adventure/[id]'].includes(pathname) ? navStyles.selected : navStyles.unselected}>
                        
                                Campaigns | 
                        
                    </Link>}
                {path && path === "monsters" && <Link href={`/monsters`}>Monsters</Link>}
                {path && path === "equipment" && <Link href={`/equipment`}>Equipment</Link>}
                {path && path === "spells" && <Link href={`/spells`}>Spells</Link>}
                
                {campaign && path && ['campaign', 'adventure', 'encounter'].includes(path) && <Link href={`/campaign/${campaign._id}`}>{campaign.name}</Link>}

                    

                {/* {campaign && campaign.id && location === "campaign" && <p style={{"color": "var(--paper)"}} title={campaign.description}>&gt; {campaign.name}</p>} */}
                
                {adventure && path && ['adventure', 'encounter'].includes(path) && <Link href={`/adventure/${adventure._id}`}>&gt; {adventure.name}</Link>}
                {adventure && adventure.id && location === "adventure" && <p style={{"color": "var(--paper)"}} title={adventure.description}>&gt; {adventure.name}</p>}

                {encounter && path && ['encounter'].includes(path) &&
                    <Link
                        href={`/encounter/${encounter._id}`}
                        title={encounter.description}
                        legacyBehavior>
                        <span>&gt; {encounter.name}</span>
                    </Link>}
                {encounter && encounter.id && location === "encounter" && <p style={{"color": "var(--paper)"}} title={encounter.description}>&gt; {encounter.name}</p>}
            </nav>
            {/* <button onClick={(e) => {e.preventDefault(); toggleSidebar(localStorage.sidebar)}}><FaArrowLeft /></button> */}
        </header>
    );
}

export default Nav