import React from "react";
import { useGravityGroup } from "renature";

const AnimationGroup = () => {
  const [nodes] = useGravityGroup(3, (i) => ({
    from: {
      transform: "translate(0px, 0px) scale(1) skewY(0deg)",
      opacity: 0,
    },
    to: {
      transform: "translate(20px, 20px) scale(1.2) skewY(50deg)",
      opacity: 1,
    },
    config: {
      moverMass: 10000,
      attractorMass: 10000000000000,
      r: 10,
    },
    repeat: Infinity,
    delay: i * 500,
  }));
  return (
    <div className="container">
      {nodes.map((props, i) => {
        return <div className="box" key={i} {...props} />;
      })}
    </div>
  );
};

export default AnimationGroup;
