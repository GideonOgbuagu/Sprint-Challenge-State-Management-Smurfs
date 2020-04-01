import React from 'react';
import './SmurfsList.css'
import Smurf from './Smurf';



const SmurfsList = (props) => {
    //console.log(props, " @@@@ from SmurfList")
    return (
        <div className="smurfs-list">
            
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
            
        </div>
    )
}


export default SmurfsList;
