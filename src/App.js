import React from 'react';
import RecipieList from './RecipieList';

function App() {
  return (
    <RecipieList recipies={sampleRecipies}/>
  )
}

const sampleRecipies = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: '2',
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n2. Put chicken in over\n3. Eat chicken',
    ingredients: [
      {
        id: 1,
        name: 'chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'salt',
        amount: '1 teaspoon'
      }
    ]
  },
  {
    id: 2,
    name: 'Bland Pork',
    servings: '3',
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in over\n3. Eat pork',
    ingredients: [
      {
        id: 1,
        name: 'pork',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'paprika',
        amount: '2 tablespoons'
      }
    ]
  }
]

export default App;
