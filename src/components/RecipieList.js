import React, {useContext} from 'react';
import Recipie from './Recipie';
import { RecipieContext } from './App';

export default function RecipieList({recipies}) {
  const { handleAddRecipie } = useContext(RecipieContext)
  return (
    <div className="recipie-list">
      <div>
        {recipies.map(recipie => {
          return (
            <Recipie key={recipie.id} {...recipie} />
          )
        })}
      </div>
      <div className="recipie-list__add-btn-container">
        <button onClick={handleAddRecipie} className="btn btn--primary">Add Recipie</button>
      </div>
    </div>
  )
}