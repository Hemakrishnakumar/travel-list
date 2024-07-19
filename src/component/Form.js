import { useState } from "react";


export default function Form(props) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    if (description.trim() === "") return;
    const item = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    props.addItem(item);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form">
      <h3>What do you need for your trip 😍 ?</h3>
      <select onChange={(e) => setQuantity(e.target.value)} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="item...."
        value={description}
      />
      <button onClick={submitHandler}>Add</button>
    </form>
  );
}