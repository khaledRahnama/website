function List() {
    const fruits = [{ name: 'apple', calories: 95 },
    { name: 'orange', calories: 45 },
    { name: 'banana', calories: 105 },
    { name: 'coconut', calories: 156 },
    { name: 'pineapple', calories: 37 }];


// we should have unique keys , so we define ids
    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name} </li>);

    return (
        <ol>{listItems}</ol>
    );

}
export default List