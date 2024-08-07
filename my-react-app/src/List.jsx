import PropTypes from 'prop-types'


function List(props) {

    const itemList = props.items;
    const category = props.category;

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); //alphabetical order
    // fruits.sort((a,b)=> b.name.localeCompare(a.name)); // reverse alphabetical order

    // fruits.sort((a,b) => a.calories-b.calories);//sort by calories (Numerical order)
    // fruits.sort((a, b) => b.calories - a.calories);//sort by calories (Reverse Numerical order)


    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);



    // we should have unique keys , so we define ids
    const listItems = itemList.map(item => <li key={item.id}>
        {item.name} : &nbsp;
        <b>{item.calories} </b> </li>);

    return (<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>

    </>
    );

}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    }))
}

List.defaultProps = {
    category: "category",

    // in case one array is missing 
    items: [],
}
export default List