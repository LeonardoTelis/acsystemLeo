import axios, { Axios } from "axios";
import Status from "./Status";

export async function searchStatus() {
  let response = await fetch("http://localhost:8080/acsystem/creditos/status", {
    method: "GET",
    headers: {
      Accept: "application/json",
      // 'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export async function removeCredito(id: Number) {
  let token = localStorage.getItem("token");
  let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
  let URL = `http://localhost:8080/acsystem/creditos/status/${id}`;
  let authorization = `Bearer ${tokenDeAcceso}`;

  await axios.delete(URL, {
    headers: {
      Authorization: authorization,
    },
  });
}

export const searchCreditoById = async (id: String) => {
  try {
    let res = await axios({
      url: `http://localhost:8080/acsystem/creditos/status/${id}`,
      method: "get",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
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

export const editCredito = async (credito : Status) => {
  try {
    await axios({
      method: "put",
      url: `http://localhost:8080/acsystem/creditos/status/${credito.id}`,
      data: {
        nombre:credito.nombre,
        activo:credito.activo
      },
    });
  } catch (err) {
    if (err.response.status === 404) {
      console.log("Resource could not be found!");
    } else {
      console.log(err.message);
    }
  }
};
