import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        children={"Click Here"}
        onClick={() => {
          console.log("clicked");
        }}
      />
    </div>
  );
}

export default App;
