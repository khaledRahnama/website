function List() {
    const fruits = [{ id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 156 },
    { id: 5, name: 'pineapple', calories: 37 }];


    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); //alphabetical order
    // fruits.sort((a,b)=> b.name.localeCompare(a.name)); // reverse alphabetical order

    // fruits.sort((a,b) => a.calories-b.calories);//sort by calories (Numerical order)
    // fruits.sort((a, b) => b.calories - a.calories);//sort by calories (Reverse Numerical order)


    const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);



    // we should have unique keys , so we define ids
    const listItems = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>
        {lowCalFruit.name} : &nbsp;
        <b>{lowCalFruit.calories} </b> </li>);

    return (
        <ol>{listItems}</ol>
    );

}
export default List