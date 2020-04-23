import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

// Component
import CakeContainer from "./components/containers/CakeContainer";
import HooksCakeContainer from "./components/containers/HooksCakeContainer";
import HooksIceCreamContainer from "./components/containers/HooksIceCreamContainer";
import IceCreamContainer from "./components/containers/IceCreamContainer";
import NewCakeContainer from "./components/containers/NewCakeContainer";
import ItemContainer from "./components/containers/ItemContainer";
import UserListContainer from "./components/containers/UserListContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h4>Own State using mapStateToProps and mapDispatchToProps</h4>
        <ItemContainer cake />
        <hr />
        <CakeContainer />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <hr />
        <h4>Action Payload</h4>
        <NewCakeContainer />
        <hr />
        <UserListContainer />
      </div>
    </Provider>
  );
}

export default App;
