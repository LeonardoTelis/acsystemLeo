import axios, { Axios } from "axios";

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
      "Authorization": authorization,
    },
  });
}

