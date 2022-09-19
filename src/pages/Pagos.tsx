import React from "react";
import { NavButtons } from '../components/NavButtons';
import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";

const Pagos: React.FC = () => {
    return (
<IonPage>
    <IonHeader>
        <IonToolbar>
            <IonTitle>Pagos</IonTitle>
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

export default Pagos;
