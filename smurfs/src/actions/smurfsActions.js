import axios from 'axios';

export const GET_SMURF = 'GET_SMURF';
export const POST_SMURF = 'POST_SMURF';

export const getSmurf = () => dispatch => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        //console.log(res.data, "from Actions")

        dispatch({type: 'GET_SMURF', payload: res.data})
    })
    .catch(err => {
        console.log('something went wrong', err)
    })
}

export const postSmurf = (newSmurf) => dispatch => {
    //const body = JSON.stringify({name, age, height})
    axios.post('http://localhost/3333/smurfs', newSmurf)
    .then(res => {
        console.log(res, "from postSmurfs");
        dispatch({type: POST_SMURF, payload: res.data})
    })
    .catch(err => {
        console.log("Some Went Wrong, Error: ", err)
    })
}