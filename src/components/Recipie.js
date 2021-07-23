import React, {useContext} from 'react';
import IngredientList from './IngredientList';
import {RecipieContext} from './App';

export default function Recipie(props) {
  const { handleDeleteRecipie } = useContext(RecipieContext)

  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
  } = props

  return (
    <div className='recipie--card'>
      <div className='recipie__header'>
        <h3 className='recipie__title'>{name}</h3>
        <div>
          <button className='btn btn--primary mr-1'>Edit</button>
          <button onClick={()=>handleDeleteRecipie(id)} className='btn btn--danger'>Delete</button>
        </div>
      </div>
      <div className='recipie__row'>
        <span className='recipie__label'>Cook Time: </span>
        <span className='recipie__value'>{cookTime}</span>
      </div>
      <div className='recipie__row'>
        <span className='recipie__label'>Servings: </span>
        <span className='recipie__value'>{servings}</span>
      </div>
      <div className='recipie__row'>
        <span className='recipie__label'>Instructions: </span>
          <div className='recipie__value recipie__value--indented recipie__instructions'>
            {instructions}
          </div>
      </div>
      <div className='recipie__row'>
        <span className='recipie__label'>Ingredients: </span>
          <div className='recipie__value recipie__value--indented'>
            <IngredientList ingredients ={ingredients} />
          </div>
      </div>
    </div>
  )
}
