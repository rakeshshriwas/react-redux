import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../../redux";

function HooksIceCreamContainer() {
  const nomOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of icecream - {nomOfIceCream}</h2>
      <p>Ice Cream functional Container</p>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
