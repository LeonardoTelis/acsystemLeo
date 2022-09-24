import axios, { Axios } from "axios";
import Unidades from "./Unidades";
// import Firma from "./Firma";

export const searchUnidadById = async (id: String) => {
  let token = localStorage.getItem("token");
  let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
  let authorization = `Bearer ${tokenDeAcceso}`;
  try {
    let res = await axios({
      url: `http://localhost:8080/acsystem/firmas/${id}/unidadesNegocio`,
      method: "get",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
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

export async function removeUnidadNegocio(
  idFirma: Number,
  idUnidadNegocio: Number
) {
  let URL = `http://localhost:8080/acsystem/firmas/${idUnidadNegocio}/unidadesNegocio/${idFirma}`;
  let token = localStorage.getItem("token");
  let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
  let authorization = `Bearer ${tokenDeAcceso}`;

  await axios.delete(URL, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": authorization,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
}

export const editUnidadNegocio = async (
  idFirma: Number,
  unidadNegocio: Unidades
) => {
  let token = localStorage.getItem("token");
  let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
  let authorization = `Bearer ${tokenDeAcceso}`;
  try {
    await axios({
      method: "put",
      url: `http://localhost:8080/firmas/${idFirma}/unidadesNegocio/${unidadNegocio.id}`,
      data: {
        activo: unidadNegocio.activo,
        nombre: unidadNegocio.nombre,
        script: unidadNegocio.script,
      },
      headers: {
        Authorization: authorization,
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
