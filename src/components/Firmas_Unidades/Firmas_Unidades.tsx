import React, { useState } from "react";
import { NavButtons } from '../NavButtons';
import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonMenu, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { checkmark, text } from "ionicons/icons";
import "./Firmas.css";
import { useHistory } from "react-router";
import UserFirma from "./UserFirma";
import { UserId } from "./Firmas_UnidadesApi";

const Firmas_Unidades: React.FC = () => {

    return (
<IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Firmas y Unidades de negocio</IonTitle>
            <IonButtons slot="end">
            <NavButtons/>
            </IonButtons>
        </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
    <br></br>
    <IonCard>
        <br></br>
        <IonTitle>Firmas</IonTitle>
          <IonItem>
            <IonLabel position="floating">ID</IonLabel>
            <IonInput value={''}></IonInput>
          </IonItem>


        <IonItem>
                <IonButton color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={checkmark} />
                Consultar
                </IonButton>
            </IonItem>
    </IonCard>



<br/><br/>
    <IonCard>
        <br></br>
        <IonItem>
        <IonTitle>Unidades de negocio</IonTitle><br></br>
        </IonItem>
<br></br>
        <IonRow id="headerTable">
        <IonCol>Id</IonCol>
        <IonCol>Activo</IonCol>
        <IonCol>Nombre</IonCol>
        <IonCol>Script</IonCol>
        <IonCol>Firma Id</IonCol>
      </IonRow>

    <IonGrid className="table">
    

      <IonRow>
        <IonCol>ion-col size="6"</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>

      <IonRow>
      <IonCol>ion-col size="6"</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>
    </IonGrid>
        
    </IonCard>
    </IonContent>
    
</IonPage>
    );
};

export default Firmas_Unidades;