import ListGroup from "./components/ListGroup";
let cities = ["Paris", "London", "Berlin", "Hong Kong", "Tokyo"];
let colors = ["Red", "Green", "Blue", "Orange", "Black"];

function App() {
  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
      <ListGroup items={colors} heading="Colors" />
    </div>
  );
}

export default App;