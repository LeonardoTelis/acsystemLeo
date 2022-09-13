import "./FormLogin.css";
import logo from "../img/logocja.png";
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";

interface ContainerProps {}

const FormLogin: React.FC<ContainerProps> = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItem className="conteiner" lines="none">
          <IonGrid>
            <IonRow>
              <IonCol class="containerLogo">
                <IonImg src={logo} alt="logo" className="logo"/>
              </IonCol>
            </IonRow>
            <IonRow className="containerForm">
              <form>
                <IonItem className="containerInputs containerInputUsuario">
                  <IonLabel position="floating">Usuario</IonLabel>
                  <IonInput type="text" name="usuario" />
                </IonItem>
                <IonItem className="containerInputs containerInputPassword">
                  <IonLabel position="floating">Contraseña</IonLabel>
                  <IonInput type="text" name="password" />
                </IonItem>
                <IonButton>Entrar</IonButton>
              </form>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default FormLogin;
