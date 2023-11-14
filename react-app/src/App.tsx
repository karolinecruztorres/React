import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Paris", "London", "Berlin", "Hong Kong", "Tokyo"];
  
  const handleOnSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleOnSelect}
      />
    </div>
  );
}

export default App;