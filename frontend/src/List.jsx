import React from 'react'

const List = (props) => {
    
    const fruits = props.fruitList;

    const lowCalFruits = fruits.filter(fruit => fruit.cals < 90); 

    const highCalFruits = fruits.filter(fruit => fruit.cals > 90);
    
    // create a new array using map function to keep original intact
    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp; {fruit.cals}</li>);
    

    const listItemsLow = lowCalFruits.map(fruit => <li key={fruit.name}> {fruit.name} : {fruit.cals} </li>);

    const listItemsHigh = highCalFruits.map(fruit => <li key={fruit.name}> {fruit.name} : {fruit.cals} </li>);
    
    return(
        <div className='nutrition-table'>
            <h1>Nutrition Table 🍅</h1>
            <ul className='fruits-list'>
                {listItems}
            </ul>

            <h3>Low Calorie Fruits</h3>

            <ul className='fruits-list'>
                {listItemsLow}
            </ul>

            <h3>High Calorie Fruits</h3>

            <ul className='fruits-list'>
                {listItemsHigh}
            </ul>
        </div>
    )
}

export default List