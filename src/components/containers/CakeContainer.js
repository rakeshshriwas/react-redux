import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number Of Cake - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
// Take redux state as parameter
// When you want to access redux state in our component you
// need to define mapStateToProps function
// It gets redux state as parameter, which can retrive apropriate property
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
    // props: -> map to state -> state
  };
};

// When you want to dispatch action need to define mapDispatchToProps function used
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    //props : -> action creator
  };
};
// Connect function connects react component to the redux store
// It's connect cake container to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
