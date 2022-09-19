import React from "react";
import { NavButtons } from '../components/NavButtons';
import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Firmas_unid: React.FC = () => {
    return (
<IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Firmas Unidad</IonTitle>
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

export default Firmas_unid;