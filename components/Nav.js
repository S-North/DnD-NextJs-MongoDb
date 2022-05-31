import Link from 'next/link';
import { useEffect, useState } from 'react'
import navStyles from '../styles/Nav.module.css'
import { useRouter } from "next/router";

const Nav = ({campaign, adventure, encounter}) => {
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
                {path && path === "campaigns" &&<Link href={`/campaigns`}>&gt; Campaigns</Link>}
                {path && path === "monsters" && <Link href={`/monsters`}>&gt; Monsters</Link>}
                {path && path === "equipment" && <Link href={`/equipment`}>&gt; Equipment</Link>}
                {path && path === "spells" && <Link href={`/spells`}>&gt; Spells</Link>}
                
                {campaign && path && ['campaign', 'adventure', 'encounter'].includes(path) && 
                    <>
                    <Link href={`/campaigns`}>&gt; Campaigns</Link>
                    
                    <Link style={{cursor: "pointer"}} className="tooltip" href={`/campaign/${campaign._id}`}>
                        <>
                        <span >&gt; {campaign.name}</span>
                        {/* <span className="tooltiptext">&gt; {campaign.description}</span> */}
                        </>
                    </Link>
                    </>}
                {campaign && campaign.id && location === "campaign" && <p style={{"color": "var(--paper)"}} title={campaign.description}>&gt; {campaign.name}</p>}
                
                {adventure && path && ['adventure', 'encounter'].includes(path) && 
                    <Link className="tooltip" href={`/adventure/${adventure._id}`}>
                        <span className="tooltiptext">&gt; {adventure.name}</span>
                    </Link>}
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