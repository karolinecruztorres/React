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
  const [value, setValue] = useState<string>("");
  const [listItems, setListItems] = useState<TodoItem[]>([]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    setListItems((listItems) => [
      ...listItems,
      { id: Date.now(), name: value, checked: false },
    ]);
    setValue("");
  };

  const check = (id: number) => {
    const changeCheck = listItems.map((item: any) =>
      item.id === id ? { ...item, checked: true } : item
    );
    setListItems(changeCheck);
  };

  const handleRemove = () => {
    setListItems(listItems.filter((item) => !item.checked));
  };

  return (
    <Container>
      <Input
        addOnClick={handleAdd}
        onChange={handleOnChange}
        removeOnClick={handleRemove}
        clearInput={value}
      />
      <List items={listItems} onCheck={check} />
    </Container>
  );
}

export default App;
