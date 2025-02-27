import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // state
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //listItems = [];
  function getMessage() {
    return items.length === 0 ? "No items in the list" : null;
  }

  // event handler
  //const handleClick = (event: MouseEvent<HTMLLIElement>) => {
  //    console.log(event.currentTarget.textContent, " clicked");
  //};

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {getMessage()}
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
