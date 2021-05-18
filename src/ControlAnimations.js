import React from "react";
import { useFriction } from "renature";

const ControlAnimations = () => {
  const [props, controller] = useFriction({
    from: {
      transform: "translateY(0px)",
      opacity: 1,
      borderRadius: "10%",
    },
    to: {
      transform: "translateY(50px)",
      opacity: 0,
      borderRadius: "50%",
    },
    repeat: Infinity,
    pause: true, //Signal that the animation should not run on mount.
  });
  return (
    <div>
      <div className="btn-box">
        <button onClick={controller.start} placeholder="start">
          Start
        </button>
        <button onClick={controller.pause} placeholder="pause">
          Pause
        </button>
      </div>
      <div className="box" {...props} />
    </div>
  );
};

export default ControlAnimations;
