import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../../redux";

function IceCreameContainer(props) {
  return (
    <div>
      <h2>Number Of IceCreame - {props.numOfIceCream}</h2>
      <p>Class Components</p>
      <button onClick={props.buyIceCream}>Buy IceCreame</button>
    </div>
  );
}
// Take redux state as parameter
// When you want to access redux state in our component you
// need to define mapStateToProps function
// It gets redux state as parameter, which can retrive apropriate property
const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
    // props: -> map to state -> state
  };
};

// When you want to dispatch action need to define mapDispatchToProps function used
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    //props : -> action creator
  };
};
// Connect function connects react component to the redux store
// It's connect cake container to redux store
export default connect(mapStateToProps, mapDispatchToProps)(IceCreameContainer);
