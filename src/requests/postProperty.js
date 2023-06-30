import axios from "axios";

const postProperty = (fields) => {
  axios
    .post(`http://localhost:3000/api/v1/PropertyListing`, fields)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default postProperty;
