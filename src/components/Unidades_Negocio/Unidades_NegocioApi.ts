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

export const searchUnidadNegocioById = async (idFirma:String,idUnidadNegocio:String) => {
  let token = localStorage.getItem("token");
  let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
  let authorization = `Bearer ${tokenDeAcceso}`;
  try {
    let res = await axios({
      url: `http://localhost:8080/acsystem/firmas/${idFirma}/unidadesNegocio/${idUnidadNegocio}`,
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

export const editUnidadNegocio = async (unidadNegocio:any,idFirma:String,idUnidadNegocio:String) => {
  let token = localStorage.getItem("token");
  let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
  let authorization = `Bearer ${tokenDeAcceso}`;
  try {
    await axios({
      method: "put",
      url: `http://localhost:8080/acsystem/firmas/${idFirma}/unidadesNegocio/${idUnidadNegocio}`,
      data: {
        nombre: unidadNegocio.nombre,
        activo: unidadNegocio.activo,
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

export const saveUnidad = async (unidadNegocio:Unidades,firmaId:any) => {
  let token = localStorage.getItem("token");
  let tokenDeAcceso = JSON.parse(String(token)).tokenDeAcceso;
  let authorization = `Bearer ${tokenDeAcceso}`;

  const newPost = {
    activo: unidadNegocio.activo,
    nombre: unidadNegocio.nombre,
	  script: unidadNegocio.script,
    firma_id:firmaId
  };

  const sendPostRequest = async () => {
    try {
        const resp = await axios.post(`http://localhost:8080/acsystem/firmas/${firmaId}/unidadesNegocio/`, newPost,{
          headers: {
            'Authorization': authorization,
          },
        });
        console.log(resp.data);
        return true;
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return false;
    }
  };

  return sendPostRequest()
};
