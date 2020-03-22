import React, { useState } from 'react'
import './SmurfsForm.css';

const SmurfsForm = () => {
    const [state, setState ] = useState()

    return (
        <div className="form-container">
            <form className="form">
                <label>Enter Name: 
                    <input type="type" name="name" value="" onChange placeholder="Enter name"/>
                </label>
                <label>Enter Age: 
                    <input type="type" name="age" value="" onChange placeholder="Enter age"/>
                </label>
                <label>Enter Height: 
                    <input type="type" name="height" value="" onChange placeholder="Enter height"/>
                </label>
                
                 
            </form>
        </div>
    )
}

export default SmurfsForm;
