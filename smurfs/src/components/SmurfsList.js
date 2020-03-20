import React from 'react';
import Smurf from './Smurf';


const SmurfsList = (props) => {
    console.log(props, " @@@@ from SmurfList")
    return (
        <div>
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
            
        </div>
    )
}


export default SmurfsList;
