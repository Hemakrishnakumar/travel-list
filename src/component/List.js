import { useState } from "react";

export default function List(props) {
  const [sortBy, setSortBy] = useState("input");
  var sortedList = [...props.items];

  if (sortBy === "description") {
    sortedList.sort((a, b) =>
      a.description.toLowerCase() > b.description.toLowerCase() ? 1 : -1
    );
  } else if (sortBy === "status") {
    sortedList = sortedList.sort((a, b) => Number(b.packed - a.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <li key={item.id}>
            <input
              checked={item.packed ? "checked" : ""}
              type="checkbox"
              onClick={() => props.checkBoxHandler(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => props.deleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by Input order</option>
          <option value="status">sort by Packed Status</option>
          <option value="description">sort by Description</option>
        </select>
        <button onClick={() => props.clearList()}>Clear List</button>
      </div>
    </div>
  );
}
