import Alert from "./components/Alert/Alert";
import Button from "./components/Button/Button";
import FavoriteIcon from "./components/FavoriteIcon/FavoriteIcon";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          children={"You should check in on some of those fields below."}
          onClose={() => {
            setAlertVisible(false);
          }}
        />
      )}
      <Button
        color={"danger"}
        children={"Click Here"}
        onclick={() => {
          setAlertVisible(true);
        }}
      />
      <FavoriteIcon />
    </div>
  );
}

export default App;
