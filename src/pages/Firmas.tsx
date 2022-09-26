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
import Firmas_Unidades from "../components/Firmas_Unidades/Firmas_Unidades";

const Graficas: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Firmas_Unidades></Firmas_Unidades>
      </IonContent>
    </IonPage>
  );
};

export default Graficas;
