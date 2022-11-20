import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import { useState, useEffect } from "react";
import EquipmentList from "../../components/equipment/EquipmentList";
import { Dialog } from 'primereact/dialog';
import { FileUpload } from "primereact/fileupload";
import { importEquipment } from "../../utils/import";
import Nav from "../../components/Nav";
import PaginationItemList from "../../components/PaginationItemList";


const Equipment = () => {
    const { user, error, isLoading } = useUser();
    const [modal, setModal] = useState({ type: "none", on: false });
    const [ equipmentImport, setequipmentImport ] = useState([])
    const [ equipmentParsed, setequipmentParsed ] = useState([])
    const [ filteredItems, setfilteredItems ] = useState([])

    const importEquipmentToDB = async (equipment) => {
        // break the array into groups of 50 and upload to database
        const uploadChunk = async (chunk) => {
            console.log(chunk)

            const response = await fetch(`/api/equipment`, {
                method: "POST",
                body: JSON.stringify({
                    action: "addmany",
                    data: chunk,
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            const uploadedEquipment = await response.json();
            console.log(uploadedEquipment);
        }

        const chunkSize = 50;

        for (let i = 0; i < equipment.length; i += chunkSize) {
            const chunk = equipment.slice(i, i + chunkSize);
            await uploadChunk(chunk)
        }
    }

    const getFile = async (file) => {
        const equipment = []
        let content
        if (file.type === 'application/json') {
           content = await JSON.parse(await file.text());
        } else {
           setImportMessage('Selected import file is not in JSON FORMAT');
           console.log('Selected import file is not in JSON FORMAT')
           return
        }
  
        console.log(content.compendium.item)
  
        if (content.length === 0) {
           setImportMessage('No records found in data');
           console.log('No records found')
           return
        }
  
        content.compendium.item.forEach(item => {
           if (!item.name) {
              setImportMessage("data is not valid")
              console.log("data is not valid")
           }
        }) 
        // console.log(content)
        // if (content.source) setImportTag(content.source)
        // importMonsterManual(content)
        const types = []
        const itemKeys = {}
        content.compendium.item.forEach(item => {
            // console.log(item)
            // if (
            //     item.modifier 
            //     // && !item.modifier[0]?.__text.includes("ranged attacks")
            //     // && !item.modifier[0]?.__text.includes("ranged damage")
            //     && !item.modifier[0]?.__text.includes("ac ")
            //     // && !item.modifier[0]?.__text.includes("melee attacks")
            //     // && !item.modifier[0]?.__text.includes("melee damage")
            //     ) types.push(item.modifier)
            // if (item.modifier && item.modifier) {
            //     item.modifier.forEach(mod => {
            //         types[mod._category] = types[mod._category] + 1 || 1
            //     })
            // }

            // if (item.dmgType) itemKeys[item.dmgType] = itemKeys[item.dmgType] + 1 || 1

            // const keys = Object.keys(item)
            // keys.forEach(key => {
            //     ItemKeys[key] = ItemKeys[key] + 1 || 1
            // })
            // if (item.roll && item.stealth === "1") types.push(item)
            if (item.roll) types.push(importEquipment(item))
            // if (item.roll) types.push(item)

            equipment.push(importEquipment(item))
         }) 

        // console.log(types)
        const response = await importEquipmentToDB(equipment)
        if (response?.acknowledged === true && response.insertedCount > 0) {
            setfilteredItems(types)
            setequipmentImport(content.compendium.item)
            setequipmentParsed(equipment)
        }
        // console.log(content.compendium.item.filter(item => {return item.rarity === 'Common'}))
    }

    useEffect(() => {
        const getMonsters = async () => {
            const response = await fetch('/api/equipment');
             let apiResponse = await response.json();
             console.log(apiResponse)
             setequipmentParsed(apiResponse)
        }
        // getMonsters();
    
        return
    }, [])

    useEffect(() => {
        const set = new Set([])
        equipmentParsed.forEach(eq => {set.add(eq.rarity)})
        console.log(set)
    
        return
    }, [equipmentParsed])
    

    return (
        <>
        <Nav
            location="equipment"
            user={user}
        />
        <Dialog visible={modal.on} onHide={() => {setModal({...modal, on: false}); setnote()}} header={modal.type} style={{"width": "100vw", "maxWidth": "45rem"}} position='top'></Dialog>
        <section>
            <div className="one-column">
                {/* <PaginationItemList admin={user.permission} /> */}
                <EquipmentList user={user} />
            </div>
            <div className="column-wide">
                {user.permission === 'admin' && <FileUpload
                    disabled={user.permission !== 'admin'}
                    accept="application/json"
                    customUpload 
                    uploadHandler={(e) => getFile(e.files[0])}
                    emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}>
                </FileUpload>}
            </div>
        </section>
        </>
    );
}

export default withPageAuthRequired(Equipment);