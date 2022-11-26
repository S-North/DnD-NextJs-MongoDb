import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from './Toolbar.module.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import DiceRoller from './DiceRoller';
import { Dialog } from 'primereact/dialog';

export default withPageAuthRequired(function Toolbar({ user }) {
    const router = useRouter()
    const [ open, setOpen ] = useState(true)
    const [ diceRoller, setDiceRoller] = useState(false)

    useEffect(() => {
        // set the state of the sidebar
        if (localStorage.sidebar === undefined) {
            localStorage.sidebar = 'open'
        }
        if (localStorage.sidebar === 'true') setOpen(true)
        if (localStorage.sidebar === 'false') setOpen(false)

        // key command listeners
        const toolbarPopups = (e) => {
            if (e.altKey && e.key === "d") {
                e.preventDefault()
                setDiceRoller(true);
            }
        }
        document.addEventListener("keydown", e => toolbarPopups(e));
    
      return () => document.removeEventListener('keydown', toolbarPopups)
    }, [])

    useEffect(() => {
        localStorage.sidebar = open
    
        return
    },  [open])
    
    

    return (
        <>
            <Dialog visible={diceRoller} header='Dice Roller' onHide={() => setDiceRoller(false)} dismissableMask={true} modal={false} >
                <DiceRoller></DiceRoller>
            </Dialog>
            <div className={styles.container}>
            <button 
                className={styles.open_button} 
                onClick={
                    () => setOpen(!open)}>

                {open ? <FaAngleRight color='white' size='1em' /> : <FaAngleLeft color='white' size='1em' />}
            </button>
            
            {open && <div className={styles.navigation}>
                <Link href={'/'}>Home</Link><br></br>
                {user?.permission === 'admin' && <><Link href={'/admin'}>Admin</Link><br></br></>}
                <Link href={'/campaigns'}>Campaigns</Link><br></br>
                <Link href={'/monsters'}>Monsters</Link><br></br>
                <Link href={'/equipment'}>Equipment</Link><br></br>
                <Link href={'/spells'}>Spells</Link>
                <hr></hr>
                <Link href={'#'}><div style={{"cursor": "pointer"}} onClick={() => setDiceRoller(true)}>Dice Roller</div></Link>
                <div style={{"minHeight": "10ch"}}></div>
                <Link href={'/spells'}>Loot Gen</Link>
                <div style={{"minHeight": "10ch"}}></div>
                <Link href={'/spells'}>Encounter Log</Link>
            </div>}
            </div>
        </>
    );
})

// export default Toolbar