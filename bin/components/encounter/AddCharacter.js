import { useContext, useState } from "react";
import { EncounterContext } from "../../pages/encounter/[id]";

export default function AddCharacter ({ addCharacters }) {
    const encounter = useContext(EncounterContext)

    const pcsInInitiative = encounter.encounter.initiative
      .filter((pc) => {return pc.enemy === "pc"})
      .map((id) => id._id);

    const pcsNotInInitiative = encounter.characters.filter((pc) => {
      return !pcsInInitiative.includes(pc._id);
    });

    const [selected, setSelected] = useState([]);
  
    const handleSelect = (e, player) => {
      if (e.target.checked) {
        setSelected([...selected, player]);
      } else {
        setSelected(
          selected.filter((character) => {
            return character.id !== player.id;
          })
        );
      }
    };
  
    const handleSubmit = (selected) => {
      const data = selected.map((pc) => ({
        name: pc.name,
        _id: pc._id,
        enemy: "pc",
        init: 0,
      }));
      addCharacters(data);
      encounter.setModal({ on: false, type: null });
    };
  
    return (
        <>
        <div className='flex-row'>
            <h2>Character List</h2>
            {pcsNotInInitiative.length > 0 && <button className='green' value="Add All" onClick={
                () => handleSubmit(pcsNotInInitiative)
                }>Add All</button>}
  
        </div>
        {pcsNotInInitiative.length > 0 ?
          pcsNotInInitiative.map((pc) => (
            <div key={pc._id} className="flex-row">
              <div className="flex-checkboxes">
                <div className="checkboxs">
                  <input type="checkbox"
                    onChange={(e) => {handleSelect(e, pc)}}
                  />
                  <p>{pc.name}</p>
                </div>
              </div>
            </div>
          ))
        : <p>There are no additional campaign characters to add</p>}
        {pcsNotInInitiative.length > 0 && <button value="Add Selected" onClick={() => handleSubmit(selected)}>Add Selected</button>}
      </>
    );
  };