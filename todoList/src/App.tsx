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

  const handleAdd = () => {
    const newTodo = { name: inputValue, checked: false, id: Date.now() };
    const todoItem = [...listItems, newTodo];
    setListItems(todoItem);
  };
  
  const check = (id: number) => {
    const changeCheck = listItems.map((item: any) =>
    item.id === id ? { ...item, checked: true } : item
    );
    setListItems(changeCheck);
  };

  const handleRemove = () => {
    const remove = listItems.filter((item) => !item.checked);
    setListItems(remove);
  }

  return (
    <Container>
      <Input onChange={handleOnChange} addOnClick={handleAdd} removeOnClick={handleRemove} />
      <List items={listItems} onCheck={check} />
    </Container>
  );
};  

export default App;
