import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { checkmark } from "ionicons/icons";
import React from "react";



const Usuarios: React.FC = () => {
    return (
<IonPage>
    <IonContent fullscreen>
        <IonCard>
            <IonTitle>Editar Unidades de Negocio</IonTitle>
            <br/><br/>
        <IonRow>
            <IonCol>
                <IonItem>
                    <IonLabel position="floating">Activo</IonLabel>
                    <IonInput value={''}></IonInput>
                </IonItem>
            </IonCol>

        </IonRow>

        <IonRow>

            <IonCol>
                <IonItem>
                    <IonLabel position="floating">Nombre</IonLabel>
                    <IonInput value={''}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>

            <IonCol>
                <IonItem>
                    <IonLabel position="floating">Scrip</IonLabel>
                    <IonInput value={''}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>
        <IonItem>
            <IonButton color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={checkmark} />
              Guardas Cambios
            </IonButton>
          </IonItem>


        </IonCard>
    </IonContent>
</IonPage>
    );
};

export default Usuarios;
