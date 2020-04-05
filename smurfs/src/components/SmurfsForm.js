import React, { useState, useEffect } from 'react'
import './SmurfsForm.css';

const SmurfsForm = props => {
    const [values, setValues] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
  

    const handleSubmit = e => {
        e.preventDefault();
        //console.log(values)
        props.postSmurf(values);
        setValues({
            name: '',
            age: '',
            height: ''
        })
                


    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <label><span>Name </span>
                    <input type="type" name="name" value={values.name} onChange={handleChange} placeholder="Enter name"/>
                </label>
                <label><span>Age </span>
                    <input type="type" name="age" value={values.age} onChange={handleChange} placeholder="Enter age"/>
                </label>
                <label><span>Height </span>
                    <input type="type" name="height" value={values.height} onChange={handleChange} placeholder="Enter height"/>
                </label>
                
                <button className="button">Add Smurf</button>
                 
            </form>
        </div>
    )
}

export default SmurfsForm;
