import axios from "axios";

export const GET_SMURF = "GET_SMURF";
export const POST_SMURF = "POST_SMURF";

//needs 3 dispatches
export const getSmurf = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      //console.log(res.data, "from Actions")

      dispatch({ type: "GET_SMURF", payload: res.data }); //GET_SMURF
    })
    .catch(err => {
      console.log("something went wrong", err);
    });
};

//needs 3 dispatches
export const postSmurf = newSmurf => dispatch => {
  //const body = JSON.stringify({name, age, height})

  //dispatch to say you're beginning a request
  axios
    .post("http://localhost/3333/smurfs", newSmurf) //item is added to the server here
    .then(res => {
      console.log(res, "from postSmurfs");
      //dispatch to say your request went well and you got a response
      dispatch({ type: POST_SMURF, payload: res.data });
    })
    .catch(err => {
      //dispatch to say your request failed with an error
      console.log("Some Went Wrong, Error: ", err);
    });
};
