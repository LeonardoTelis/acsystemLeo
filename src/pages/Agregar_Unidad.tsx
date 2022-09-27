import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { Redirect } from "react-router";
import AddCreditoStatusComponent from "../components/CreditoStatus/AddCreditoStatus";
  import MuestraStatus from "../components/CreditoStatus/MuestraStatus";
  import ValidarToken from "../components/Login/ValidarToken";
  import NavButtons from "../components/NavButtons";
  
  const Agregar_Unidad: React.FC = () => {
    if (!ValidarToken()) {
      return <Redirect to="/Login" />;
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Añadir nueva<br></br>Unidad</IonTitle>
            <IonButtons slot="end">
              <NavButtons />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <AddCreditoStatusComponent></AddCreditoStatusComponent>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Agregar_Unidad;
  