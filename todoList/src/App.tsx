import "./App.css";
import Container from "./components/Container";
import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  let [listItems, setListItems] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    listItems = [...listItems, inputValue];
    setListItems(listItems);
    console.log(listItems);
  };

  return (
    <Container>
      <Input onChange={handleChange} addToList={handleClick} />
      <List />
    </Container>
  );
}

export default App;
