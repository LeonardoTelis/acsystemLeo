import "./FormLogin.css";
import logo from "../img/logocja.png";

interface ContainerProps {}

const FormLogin: React.FC<ContainerProps> = () => {
  return (
    <div className="conteiner">
      <img src={logo} alt="logo" />
      <form className="containerForm">
        <div className="containerInputs containerInputUsuario">
          <label htmlFor="usuario">Usuario</label>
          <input type="text" name="usuario"/>
        </div>
        <div className="containerInputs containerInputPassword">
          <label htmlFor="password">Contraseña</label>
          <input type="text" name="password"/>
        </div>
        <input type="submit" value="Entrar"/>
      </form>
    </div>
  );
};

export default FormLogin;
