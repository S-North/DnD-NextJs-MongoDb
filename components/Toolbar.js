import Link from 'next/link'
import { useState } from 'react';
import styles from './Toolbar.module.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Toolbar = () => {
    const router = useRouter()
    // console.log(router)
    const [ open, setOpen ] = useState(true)

    return (
        <>
            <div className={styles.container}>
            <button 
                className={styles.open_button} 
                onClick={
                    () => setOpen(!open)}>

                {open ? <FaAngleRight color='white' size='1em' /> : <FaAngleLeft color='white' size='1em' />}
            </button>
            
            {open && <div className={styles.navigation}>
                <Link href={'/'}>Home</Link><br></br>
                <Link href={'/campaigns'}>Campaigns</Link><br></br>
                <Link href={'/monsters'}>Monsters</Link><br></br>
                <Link href={'/equipment'}>Equipment</Link><br></br>
                <Link href={'/spells'}>Spells</Link>
                <hr></hr>
                <Link href={'/spells'}>Dice Roller</Link>
                <div style={{"minHeight": "10ch"}}></div>
                <Link href={'/spells'}>Loot Gen</Link>
                <div style={{"minHeight": "10ch"}}></div>
                <Link href={'/spells'}>Encounter Log</Link>
            </div>}
            </div>
        </>
    );
}

export default Toolbar