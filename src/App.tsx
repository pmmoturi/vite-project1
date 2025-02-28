import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>world</span> Alert
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Random
      </Button>
    </div>
  );
}

export default App;
