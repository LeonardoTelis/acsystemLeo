import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { Redirect } from "react-router";
import Agregar_FirmaComponent from "../components/Firmas_Unidades/Agregar_FirmaComponent";
  import MuestraStatus from "../components/CreditoStatus/MuestraStatus";
  import ValidarToken from "../components/Login/ValidarToken";
  import NavButtons from "../components/NavButtons";
  
  const Agregar_Firma: React.FC = () => {
    if (!ValidarToken()) {
      return <Redirect to="/Login" />;
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Añadir nueva<br></br>Firma</IonTitle>
            <IonButtons slot="end">
              <NavButtons />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Agregar_FirmaComponent></Agregar_FirmaComponent>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Agregar_Firma;
  