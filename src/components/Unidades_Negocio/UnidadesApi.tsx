import axios, { Axios } from "axios";
import Firma from "./Unidades";

let token = localStorage.getItem("token");
let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
let authorization = `Bearer ${tokenDeAcceso}`;

export async function searchUnidad() {
  let response = await fetch(`http://localhost:8080/acsystem/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      // 'Content-Type': 'application/json',
    },
  });
  return await response.json();
}