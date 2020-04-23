import React from "react";
// Step: 1 - useSelector, useDispatch
import { useSelector, useDispatch } from "react-redux";

// Step: 5 import action
import { buyCake } from "../../redux";

function HooksCakeContainer() {
  // Step: 2
  // useSelector same as mapStateToProps
  // It gets redux state as parameter, which can retrive apropriate property

  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  // Step: 4 useDispatch hook return refrance to dispatch function from the redux store
  const dispatch = useDispatch();
  return (
    <div>
      {/* Stpe: 3 bind numOfCakes */}
      <h2>No of Cakes - {numOfCakes}</h2>
      <p>Funcational Component using Hook</p>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
