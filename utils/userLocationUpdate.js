// import axios from "axios";
// import userip from "./getuserip";
// import { Alert } from "react-native";
// import { Location } from "expo-location";

// const userlocation = {lat: 0, long: 0};

// const userLocationUpdate = async (latitude, longitude, userID) => { 
//     //, token) => { //included for when we do authentication
  
//     const ipAddress = await getUserIP();
    
    
//     axios
//         .post('http://localhost:3000/login', {
//             userID: userID,
//             latitude: latitude,
//             longitude: longitude
//         },
//             // {
//             //     headers: {
//             //         Authorization: `Bearer ${token}` //not sure how we're doing this, but it's included for when we do
//             //     }
//             // }
//         )
//         .then((response) => {
//             console.log(response.data);
//             // Handle the successful response here
//         })
//         .catch((error) => {
//             Alert.alert("Error", "Internal Server Error");
//             console.log(error);
//         });
// };

// export {userLocationUpdate, userlocation};
