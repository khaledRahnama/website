import List from "./List";

function App() {


  // const fruits = [{ id: 1, name: 'apple', calories: 95 },
  // { id: 2, name: 'orange', calories: 45 },
  // { id: 3, name: 'banana', calories: 105 },
  // { id: 4, name: 'coconut', calories: 156 },
  // { id: 5, name: 'pineapple', calories: 37 }];


  const fruits = [];

  const vegetables = [{ id: 6, name: 'potatoes', calories: 110 },
  { id: 7, name: 'celery', calories: 15 },
  { id: 8, name: 'carrots', calories: 25 },
  { id: 9, name: 'corn', calories: 63 },
  { id: 10, name: 'broccoli', calories: 50 }];

  return (
    <>
      {/* {fruits.length > 0 ? <List items={fruits} category="Fruits" />
        : null} */}
      {/* // Having a little less code */}

      {fruits.length > 0 && <List items={fruits} category="Fruits" />
      }

      {/* {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" />
        : null} */}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />
      }

      {/* // category is missing and we are using the default props in List.jsx */}
      {vegetables.length > 0 && <List items={vegetables} />
      }

      {/* // in case one array is missing defined in defaultProps */}
      {vegetables.length > 0 && <List category="Vegetables" />
      }



    </>
  );
}

export default App
