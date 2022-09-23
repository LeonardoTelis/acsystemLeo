import axios, { Axios } from "axios";
import Firma from "./Firma";

let token = localStorage.getItem("token");
let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
let authorization = `Bearer ${tokenDeAcceso}`;

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

export const searchFirmaById = async (id: String) => {
  try {
    let res = await axios({
      url: `http://localhost:8080/acsystem/firmas/${id}`,
      method: "get",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
        "Authorization": authorization,
      },
    });
    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
    }
    // Don't forget to return something
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export async function removeFirma(id: Number) {
  let URL = `http://localhost:8080/acsystem/firmas/${id}`;
  let authorization = `Bearer ${tokenDeAcceso}`;

  await axios.delete(URL, {
    headers: {
      "Authorization": authorization,
    },
  });
}

export const editFirma = async (firma: Firma) => {
  try {
    await axios({
      method: "put",
      url: `http://localhost:8080/acsystem/firmas/${firma.id}`,
      data: {
        nombre: firma.nombre,
        activo: firma.activo,
        diasPromesa: firma.diasPromesa,
      },
      headers:{
        "Authorization": authorization,
      }
    });
  } catch (err) {
    if (err.response.status === 404) {
      console.log("Resource could not be found!");
    } else {
      console.log(err.message);
    }
  }
};

