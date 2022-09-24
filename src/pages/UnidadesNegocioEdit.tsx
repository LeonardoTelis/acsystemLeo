import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Redirect } from "react-router";
import ValidarToken from "../components/Login/ValidarToken";
import NavButtons from "../components/NavButtons";
import Unidades_Negocio_Edit from "../components/Unidades_Negocio/Unidades_Negocio_Edit";

const UnidadesNegocioEdit: React.FC = () => {
  if (!ValidarToken()) {
    return <Redirect to="/Login" />;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Editar Unidad<br></br> de Negocio
          </IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Unidades_Negocio_Edit></Unidades_Negocio_Edit>
      </IonContent>
    </IonPage>
  );
};

export default UnidadesNegocioEdit;
