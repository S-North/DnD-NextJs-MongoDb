import Link from 'next/link';
import { useEffect, useState } from 'react'
import navStyles from '../styles/Nav.module.css'
import { useRouter } from "next/router";

const Nav = ({campaign, adventure, encounter, user}) => {
    const { query, pathname, isReady } = useRouter()
    const path = pathname.split("/")[1]
    const id = query.id
    console.log(path)
    console.log(id)
    
    return (
        <header>
            <nav>
                <h2></h2>
                <Link href='/'>Home</Link>
                {user &&<Link href={`/campaigns`}>Campaigns</Link>}
                {path && path === "monsters" && <Link href={`/monsters`}>&gt; Monsters</Link>}
                {path && path === "equipment" && <Link href={`/equipment`}>&gt; Equipment</Link>}
                {path && path === "spells" && <Link href={`/spells`}>&gt; Spells</Link>}
                
                {campaign && path && ['campaign', 'adventure', 'encounter'].includes(path) && <Link href={`/campaign/${campaign._id}`}><a>&gt; {campaign.name}</a></Link>}

                    

                {/* {campaign && campaign.id && location === "campaign" && <p style={{"color": "var(--paper)"}} title={campaign.description}>&gt; {campaign.name}</p>} */}
                
                {adventure && path && ['adventure', 'encounter'].includes(path) && <Link href={`/adventure/${adventure._id}`}><a>&gt; {adventure.name}</a></Link>}
                {adventure && adventure.id && location === "adventure" && <p style={{"color": "var(--paper)"}} title={adventure.description}>&gt; {adventure.name}</p>}

                {encounter && path && ['encounter'].includes(path) &&
                    <Link href={`/encounter/${encounter._id}`} title={encounter.description}>
                        <span>&gt; {encounter.name}</span>
                    </Link>}
                {encounter && encounter.id && location === "encounter" && <p style={{"color": "var(--paper)"}} title={encounter.description}>&gt; {encounter.name}</p>}
            </nav>
        </header>
    );
}

export default Nav