import { useState } from "react";
import Form from "./component/Form";
import Stats from "./component/Stats";
import List from "./component/List";

const initialItems = [
  { id: 1, description: "Passport", quantity: 1, packed: false },
  { id: 2, description: "Camera", quantity: 1, packed: true },
  { id: 3, description: "Umbrella", quantity: 1, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const checkBoxHandler = (id) =>
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  const addItemHandler = (item) => {
    console.log(item);
    setItems((items) => [...items, item]);
  };

  const deleteItemHandler = (id) =>
    setItems(items.filter((item) => item.id !== id));

  const clearListHandler = () => {
    const confirmed = window.confirm(
      "Are you sure You want to delete all the items?"
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItemHandler} />
      <List
        clearList={clearListHandler}
        items={items}
        checkBoxHandler={checkBoxHandler}
        deleteItem={deleteItemHandler}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}
