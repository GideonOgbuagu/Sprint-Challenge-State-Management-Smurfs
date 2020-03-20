import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { smurfsAction } from '../actions/smurfsActions';
import SmurfsForm from './SmurfsForm';
import SmurfsList from './SmurfsList';

import "./App.css";



const App = (props) => {
  //const [state, setState ] = useState('')
  console.log(props, "@@@@@ from App.js")

  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        {/* <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <SmurfsForm />
        <SmurfsList smurfs={props.smurfs}/>
        
        <button onClick={() => props.smurfsAction()}>Call Smurfs</button>
        {
           useEffect(() => {
            smurfsAction()
          }, [])
        }
      {props.smurfs.map((item, i) => (
        <h1 key={i}>{item.name}</h1>
      ))}

      </div>
    );
  
}
export const mapStateToProps = state => {
  return {
      smurfs: state.smurfs
  }
}
export default connect(mapStateToProps, {smurfsAction})(App);
