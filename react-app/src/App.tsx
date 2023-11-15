import Alert from "./components/Alert";
import Button from "./components/Button";
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
        children={"Click Here"}
        onclick={() => {
          setAlertVisible(true);
        }}
      />
    </div>
  );
}

export default App;
