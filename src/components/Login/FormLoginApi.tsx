import User from "./User";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";

export async function loginUser(user: User) {
let url = "http://localhost:8080/acsystem/login/iniciarsesion"
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  });
  let respuesta = await response.json();
  if(respuesta.tokenDeAcceso){
    // let tokenDeCode : any;
    // tokenDeCode = jwt_decode(respuesta.tokenDeAcceso);
    localStorage.token = JSON.stringify(respuesta);
    return true
  }else{
    return false
  }
    
  //   if(tokenDeCode.iat < tokenDeCode.exp){
  //     localStorage.token = JSON.stringify(respuesta);
  //     console.log(tokenDeCode.iat + " " + tokenDeCode.exp);
      
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  // else{
  //   return false;
  // }
}
