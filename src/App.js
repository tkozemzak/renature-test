import "./App.css";
import { useFriction } from "renature";
import MultProps from "./MultProps";
import AnimationGroup from "./AnimationGroup";
import ControlAnimations from "./ControlAnimations";

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
      {/* <div {...props} className="box" /> */}
      {/* <MultProps /> */}
      {/* <AnimationGroup /> */}
      <ControlAnimations />
    </div>
  );
}

export default App;
