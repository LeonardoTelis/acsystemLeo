import "./FormLogin.css";
import logo from "../../img/logocja.png";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
} from "@ionic/react";
import { loginUser } from "./FormLoginApi";
import { useState } from "react";
import User from "./User";
import { useHistory } from "react-router";
import { alertCircleOutline} from "ionicons/icons";

interface ContainerProps {}

const FormLogin: React.FC<ContainerProps> = () => {
  const [user, setUser] = useState<User>({});
  const history = useHistory();
  const [isActiveModal, setIsActiveModal] = useState(false);

  const login = async () => {
    let logueado = loginUser(user);
    if (await logueado) {
      history.push("/acsystem");
    } else {
      setIsActiveModal(true);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItem className="conteiner" lines="none">
          <IonGrid>
            <IonRow>
              <IonCol className="containerLogo">
                <IonImg src={logo} alt="logo" className="logo" />
              </IonCol>
            </IonRow>
            <IonRow className="containerForm">
              <IonItem className="containerInputs containerInputUsuario">
                <IonLabel position="floating">Usuario</IonLabel>
                <IonInput
                  type="text"
                  name="usuario"
                  id="username"
                  onIonChange={(e) => (user.username = String(e.detail.value))}
                />
              </IonItem>
              <IonItem className="containerInputs containerInputPassword">
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput
                  type="password"
                  name="password"
                  id="password"
                  onIonChange={(e) => (user.password = String(e.detail.value))}
                />
              </IonItem>
              <IonButton onClick={login} size="small" class="btnEntrar">
                Entrar
              </IonButton>
              <IonItem
                lines="none"
                className="modalError"
                style={{
                  display: isActiveModal ? "block" : "none"
                }}
              >
                <IonIcon
                  icon={alertCircleOutline}
                  color="danger"
                  className="iconError"
                ></IonIcon>
                <IonText color="danger">Error en las credendicales.</IonText>
              </IonItem>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default FormLogin;
