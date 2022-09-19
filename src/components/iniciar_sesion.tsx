import React from "react";
import { NavButtons } from '../components/NavButtons';
import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const iniciar_sesion: React.FC = () => {
    return (
<IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Iniciar sesion</IonTitle>
            <IonButtons slot="end">
            <NavButtons/>
            </IonButtons>
        </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
    </IonContent>
</IonPage>
    );
};

export default iniciar_sesion;