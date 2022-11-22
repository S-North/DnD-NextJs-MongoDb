import styles from './EquipmentView.module.css'

export default function EquipmentView ({ equipment }) {
    return (
        <div className={styles.container}>
            <h2>{equipment?.name}</h2>
            {equipment?.description?.map(line => (
                <p key={line}>{line}</p>
            ))}
            <div className={styles.chip_line}>
                {equipment.rarity && <div id='rarity' className={styles.chip}>{equipment.rarity}</div>}
                {equipment.type && <div id='type' className={styles.chip}>{equipment.type}</div>}
                {equipment.attunement && <div id='attunement' className={styles.chip}>Requires Attunement</div>}
                {equipment.value?.amount > 0 && <div id='value' className={styles.chip}>{equipment.value.amount} {equipment.value.type}</div>}
                {equipment.weight ? <div id='weight' className={styles.chip}>{equipment.weight}lb</div> : <></>}
                {equipment.property?.map(prop => (<div id={prop} className={styles.chip}>{prop}</div>))}
            </div>
        </div>
    )
}