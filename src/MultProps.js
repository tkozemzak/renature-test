import React from "react";
import { useFriction } from "renature";

const MultProps = () => {
  const [props] = useFriction({
    from: {
      transform: "translateX(100px), rotate(0deg)",
      background: "red",
      borderRadius: "0%",
    },
    to: {
      transform: "translateX(300px), rotate(180deg)",
      background: "steelblue",
      borderRadius: "20%",
    },
    config: {
      mu: 0.2,
      mass: 20,
      initialVelocity: 5,
    },
    repeat: Infinity,
  });
  return <div {...props} className="GroupBox"></div>;
};

export default MultProps;
