import React from "react";
import { NavButtons } from "../components/NavButtons";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import Firmas_UnidadesEdit from "../components/Firmas_Unidades/Firmas_UnidadesEdit";

const Graficas: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Firmas_UnidadesEdit></Firmas_UnidadesEdit>
      </IonContent>
    </IonPage>
  );
};

export default Graficas;
