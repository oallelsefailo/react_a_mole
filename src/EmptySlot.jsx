import { useEffect, useState } from "react";
import moleEmpty from "./images/molehill.png"

function EmptySlot(props) {
  useEffect(() => {
    const randomSeconds = Math.floor(Math.random() * 5) + 1;

    const timer = setTimeout(() => {
      props.setDisplayMole(true);
    }, randomSeconds * 1000); 

    return () => {
      clearTimeout(timer);
    };
  }, [props.displayMole]);

  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={moleEmpty}
        onClick={() => props.setDisplayMole(false)}
      />
    </div>
  );
}

export default EmptySlot;
