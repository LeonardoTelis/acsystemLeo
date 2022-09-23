import axios, { Axios } from "axios";
import Unidades from "./Unidades";
// import Firma from "./Firma";

let token = localStorage.getItem("token");
let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
let authorization = `Bearer ${tokenDeAcceso}`;

export const searchUnidadById = async (id: String) => {
  try {
    let res = await axios({
      url: `http://localhost:8080/firmas/${id}/unidadesNegocio`,
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

export async function removeUnidadNegocio(idFirma: Number,idUnidadNegocio:Number) {
  let URL = `http://localhost:8080/acsystem/firmas/${idFirma}/unidadesNegocio/${idUnidadNegocio}`;
  let authorization = `Bearer ${tokenDeAcceso}`;

  await axios.delete(URL, {
    headers: {
      "Authorization": authorization,
    },
  });
}

export const editUnidadNegocio = async (idFirma: Number,unidadNegocio: Unidades) => {
  try {
    await axios({
      method: "put",
      url: `http://localhost:8080/firmas/${idFirma}/unidadesNegocio/${unidadNegocio.id}`,
      data: {
        activo: unidadNegocio.activo,
        nombre: unidadNegocio.nombre,
        script: unidadNegocio.script,
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

