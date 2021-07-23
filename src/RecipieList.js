import React from 'react'
import Recipie from './Recipie'

export default function RecipieList({recipies}) {
  return (
    <>
      <div>
        {recipies.map(recipie => {
          return (
            <Recipie
              key={recipie.id}
              {...recipie}
            />
          )
        })}
      </div>
      <button>Add Recipie</button>
    </>
  )
}