import ListGroup from "./components/ListGroup";

function App() {
  let listItems = [
    "Tokyo",
    "Mexico City",
    "New York City",
    "Mumbai",
    "Seoul",
    "Shanghai",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item, " clicked");
  };

  return (
    <div>
      <ListGroup
        items={listItems}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
