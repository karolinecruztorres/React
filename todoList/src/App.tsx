import "./App.css";
import Container from "./components/Container";
import Input from "./components/Input";
import List from "./components/List";
import { useState } from "react";

interface TodoItem {
  name: string;
  checked: boolean;
  id: number;
}

function App() {
  const [inputValue, setInputValue] = useState("");

  const [listItems, setListItems] = useState<TodoItem[]>([]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    const newTodo = { name: inputValue, checked: false, id: Date.now() };
    const todoItem = [...listItems, newTodo];
    setListItems(todoItem);
  };
  console.log(listItems);

  const check = (parameter: number) => {
    const changeCheck = listItems.map((item: any) =>
      item.id === parameter ? { ...item, checked: true } : item
    );
    setListItems(changeCheck);
  };

  return (
    <Container>
      <Input handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
      <List listItems={listItems} isChecked={check} />
    </Container>
  );
}

export default App;
