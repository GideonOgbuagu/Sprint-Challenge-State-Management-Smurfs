import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/smurfsActions";
import SmurfsForm from "./SmurfsForm";
import SmurfsList from "./SmurfsList";

import "./App.css";

const App = props => {
  //useState not needed because getSmurf triggers the reducer. State lives there.

  useEffect(() => {
    props.getSmurf();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      {/* <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
      <SmurfsForm />
      <SmurfsList smurfs={props.smurfs} getSmurf={props.getSmurf} />

      {/* <button onClick={() => props.getSmurf()}>Call Smurfs</button> */}

      {/* {props.smurfs.map((item, i) => (
        <h1 key={i}>{item.name}</h1>
      ))} */}
    </div>
  );
};
export const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(mapStateToProps, { getSmurf })(App);
