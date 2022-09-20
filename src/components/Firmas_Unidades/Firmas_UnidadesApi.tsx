//import User from "./User";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";
import UserId from "../Firmas_Unidades/UserFirma";

export async function UserId(user: UserId) {
let url = "http://localhost:8080/acsystem/firmas"
  let response = await fetch(url, {
    method: "GET",
    body: JSON.stringify(user),
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  }).then()
  

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
