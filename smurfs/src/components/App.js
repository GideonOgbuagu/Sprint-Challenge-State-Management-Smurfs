import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurf, postSmurf } from '../actions/smurfsActions';
import SmurfsForm from './SmurfsForm';
import SmurfsList from './SmurfsList';

import "./App.css";



const App = (props) => {
  const [state, setState ] = useState([])

  
    useEffect(() => {
     props.getSmurf()
   }, [])
 
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        {/* <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <SmurfsForm postSmurf={props.postSmurf} />
        <SmurfsList smurfs={props.smurfs} getSmurf={props.getSmurf}/>
        

      </div>
    );
  
}
export const mapStateToProps = state => {
  return {
      smurfs: state.smurfs
  }
}
export default connect(mapStateToProps, {getSmurf, postSmurf})(App);
