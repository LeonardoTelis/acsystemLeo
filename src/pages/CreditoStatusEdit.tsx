import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Redirect } from "react-router";
import EditarCreditoStatus from "../components/CreditoStatus/EditarCreditoStatus";
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
          <IonTitle>
            Editar Credito<br></br> Status
          </IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <EditarCreditoStatus></EditarCreditoStatus>
      </IonContent>
    </IonPage>
  );
};

export default CreditoStatus;
