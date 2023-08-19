import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
  const [displayMole, setDisplayMole] = useState(false); // start in a false state

  const handleBopMole = () => {
    props.setScore(props.score + 1); 
    setDisplayMole(false); 
  };

  const moleComponent = displayMole ? ( // terniary? to handle which one it should show
    <Mole bopMole={handleBopMole} />
  ) : (
    <EmptySlot setDisplayMole={setDisplayMole} />
  );

  return (
    <div>
      {moleComponent}
    </div>
  );
}

export default MoleContainer;
