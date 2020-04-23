// For Action payload topic

import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number Of Cake - {props.numOfCakes}</h2>
      <p>Class Components</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}
// Take redux state as parameter
// When you want to access redux state in our component you
// need to define mapStateToProps function
// It gets redux state as parameter, which can retrive apropriate property
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    // props: -> map to state -> state
  };
};

// When you want to dispatch action need to define mapDispatchToProps function used
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    //props : -> action creator
  };
};
// Connect function connects react component to the redux store
// It's connect cake container to redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
