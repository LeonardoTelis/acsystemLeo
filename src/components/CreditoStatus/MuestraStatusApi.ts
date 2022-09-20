export async function searchStatus() {
  let response = await fetch("http://localhost:8080/acsystem/creditos/status", {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
    },
  });
  return await response.json();
}
