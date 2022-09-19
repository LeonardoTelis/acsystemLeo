import jwt_decode from "jwt-decode";

export default function ValidarToken() {
  if (localStorage.token) {
    let tokenDeCode: any;
    tokenDeCode = jwt_decode(localStorage.token);
    if (tokenDeCode.iat < tokenDeCode.exp) {
      // return <Redirect to="/acsystem" />;
      return true;
    } else {
      localStorage.removeItem("token");
      return false;
    }
  }
}
