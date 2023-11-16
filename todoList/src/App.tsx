import "./App.css";
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
    <div className="w-25 p-3 border border-danger rounded">
      <h1 className="display-5 text-danger text-center mb-3">To-do List</h1>
      <Input onChange={handleChange} addToList={handleClick} />
      <ul className="list-group"><List items={listItems} /></ul>
    </div>
  );
}

export default App;
