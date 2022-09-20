import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Redirect } from "react-router";
import MuestraStatus from "../components/CreditoStatus/MuestraStatus";
import ValidarToken from "../components/Login/ValidarToken";
import NavButtons from "../components/NavButtons";

const CreditoStatus: React.FC = () => {
  if (!ValidarToken()) {
    return <Redirect to="/Login" />;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Credito<br></br> Status</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <MuestraStatus></MuestraStatus>
      </IonContent>
    </IonPage>
  );
};

export default CreditoStatus;
