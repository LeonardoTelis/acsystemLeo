import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/react';
import "./Unidades.css";
import { OverlayEventDetail } from '@ionic/core/components';
import { pencil, trash } from 'ionicons/icons';

function Unidades_Negocio() {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    'Levi te amo'
  );

 
  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Unidades de negocio
        </IonButton>
        <p>{message}</p>
        <IonModal  ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancelar</IonButton>
              </IonButtons>
              <IonTitle>Editar Unidades de negocio</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Guardar
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonGrid className='table'>
            <IonRow id="headerTable">
                <IonCol>Id</IonCol>
                <IonCol>Status</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Script</IonCol>
                <IonCol>Acciones</IonCol>
            </IonRow>
            <IonCol>Id</IonCol>
                <IonCol>Status</IonCol>
                <IonCol>Nombre</IonCol>
                <IonCol>Script</IonCol>

                <IonCol> <IonButton color="primary" fill="clear" shape="round">
                    <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>

                    <IonButton color="danger" fill="clear" shape="round">
                    <IonIcon icon={trash} slot="icon-only" />
                    </IonButton>
                </IonCol>
          </IonGrid>
         
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Unidades_Negocio;