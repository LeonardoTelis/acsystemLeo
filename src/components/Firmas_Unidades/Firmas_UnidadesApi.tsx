import axios, { Axios } from "axios";
import Firma from "./Firma";

let token = localStorage.getItem("token");
let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;

export async function searchFirma() {
  let response = await fetch(`http://localhost:8080/acsystem/firmas`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      // 'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export async function removeFirma(id: Number) {
  let URL = `http://localhost:8080/acsystem/firmas/${id}`;
  let authorization = `Bearer ${tokenDeAcceso}`;

  await axios.delete(URL, {
    headers: {
      "Authorization": authorization,
    },
  });
}
