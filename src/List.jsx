import React from 'react'

const List = () => {
    const fruits = [{name: "apple", cals:97},
        {name: "pineapple", cals:66},
        {name: "orange", cals:89}
    ];
    
    // create a new array using map function to keep original intact
    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp; {fruit.cals}</li>);

    return(
        <ul>
            {listItems}
        </ul>
    )
}

export default List