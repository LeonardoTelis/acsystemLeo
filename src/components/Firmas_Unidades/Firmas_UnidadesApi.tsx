import Firmas from "./Firma";

export async function searchFirma(id:Number) {
  let response = await fetch(`http://localhost:8080/acsystem/firmas/${id}`, {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

