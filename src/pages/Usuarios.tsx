import React from "react";
import { NavButtons } from '../components/NavButtons';
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Usuarios: React.FC = () => {
    return (
<IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Promesas</IonTitle>
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

export default Usuarios;
