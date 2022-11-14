import Link from 'next/link';
import { useEffect, useState } from 'react'
import navStyles from './Nav.module.css'
import { useRouter } from "next/router";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Nav = ({campaign, adventure, encounter, user, location}) => {
    const { query, pathname, isReady } = useRouter()
    const path = pathname.split("/")[1]
    const id = query.id
    // console.log(path)
    // console.log(id)

    useEffect(() => {
      
    
      return () => {}
    }, [])    
    
    return (
        <header className={navStyles.header}>
            <nav className={navStyles.nav}>
                <Link href='/'><a className={pathname === '/' ? navStyles.selected : navStyles.unselected}>Home | </a></Link>
                {user && user.permission === 'admin' && <Link href='/admin'><a className={pathname === '/admin' ? navStyles.selected : navStyles.unselected}>Admin | </a></Link>}
                {user &&
                    <Link href={`/campaigns`}>
                        <a 
                            className={['/campaigns', '/campaign/[id]', '/encounter/[id]', '/adventure/[id]'].includes(pathname) ? navStyles.selected : navStyles.unselected}>
                                Campaigns | 
                        </a>
                    </Link>}
                {path && path === "monsters" && <Link href={`/monsters`}>Monsters</Link>}
                {path && path === "equipment" && <Link href={`/equipment`}>Equipment</Link>}
                {path && path === "spells" && <Link href={`/spells`}>Spells</Link>}
                
                {campaign && path && ['campaign', 'adventure', 'encounter'].includes(path) && <Link href={`/campaign/${campaign._id}`}><a>{campaign.name}</a></Link>}

                    

                {/* {campaign && campaign.id && location === "campaign" && <p style={{"color": "var(--paper)"}} title={campaign.description}>&gt; {campaign.name}</p>} */}
                
                {adventure && path && ['adventure', 'encounter'].includes(path) && <Link href={`/adventure/${adventure._id}`}><a>&gt; {adventure.name}</a></Link>}
                {adventure && adventure.id && location === "adventure" && <p style={{"color": "var(--paper)"}} title={adventure.description}>&gt; {adventure.name}</p>}

                {encounter && path && ['encounter'].includes(path) &&
                    <Link href={`/encounter/${encounter._id}`} title={encounter.description}>
                        <span>&gt; {encounter.name}</span>
                    </Link>}
                {encounter && encounter.id && location === "encounter" && <p style={{"color": "var(--paper)"}} title={encounter.description}>&gt; {encounter.name}</p>}
            </nav>
            {/* <button onClick={(e) => {e.preventDefault(); toggleSidebar(localStorage.sidebar)}}><FaArrowLeft /></button> */}
        </header>
    );
}

export default Nav