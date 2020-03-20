import axios from 'axios';

export const GET_SMURF = 'GET_SMURF';

export const smurfsAction = () => dispatch => {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data, "from Actions")

        dispatch({type: 'GET_SMURF', payload: res.data})
    })
    .catch(err => {
        console.log('something went wrong', err)
    })
}