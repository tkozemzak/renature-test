import "./App.css";
import { useFriction } from "renature";

function App() {
  const [props] = useFriction({
    from: {
      transform: "translateX(100px)",
    },
    to: {
      transform: "translateX(300px)",
    },
    config: {
      mu: 0.8,
      mass: 2,
      initialVelocity: 5,
    },
    repeat: Infinity,
  });
  return (
    <div className="App">
      <div {...props} className="box" />
    </div>
  );
}

export default App;
