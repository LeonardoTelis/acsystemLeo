import {
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
import React from "react";
  import { Redirect } from "react-router";
  import MuestraStatus from "../components/CreditoStatus/MuestraStatus";
  import ValidarToken from "../components/Login/ValidarToken";
  import NavButtons from "../components/NavButtons";
import Unidades_Negocio from "../components/Unidades_Negocio/Unidades_Negocio";
  
  const UnidadesNegocio: React.FC = () => {
    if (!ValidarToken()) {
      return <Redirect to="/Login" />;
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Unidades<br></br> Negocio</IonTitle>
            <IonButtons slot="end">
              <NavButtons />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <Unidades_Negocio></Unidades_Negocio>
        </IonContent>
      </IonPage>
    );
  };
  
  export default UnidadesNegocio;
  