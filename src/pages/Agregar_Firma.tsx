import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { Redirect } from "react-router";
import Agregar_FirmaComponent from "../components/Firmas_Unidades/Agregar_Firma";
  import MuestraStatus from "../components/CreditoStatus/MuestraStatus";
  import ValidarToken from "../components/Login/ValidarToken";
  import NavButtons from "../components/NavButtons";
  
  const AddCreditoStatus: React.FC = () => {
    if (!ValidarToken()) {
      return <Redirect to="/Login" />;
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Añadir nuevo<br></br>Credito</IonTitle>
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
  
  export default AddCreditoStatus;
  