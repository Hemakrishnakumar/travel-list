export default function Stats({ items }) {
  const packedItems = items.filter((item) => item.packed).length;
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Add some items to plan a trip 😍.</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {items.length === packedItems
          ? "You have Everything ✅, Ready to go ✈️"
          : `👜 You have ${
              items.length
            } items on your list and You have already packed ${packedItems} (${Math.round(
              (packedItems * 100) / items.length
            )}%)`}
      </em>
    </footer>
  );
}