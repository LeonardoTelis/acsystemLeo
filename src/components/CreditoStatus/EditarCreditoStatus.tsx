import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from "@ionic/react";
import { pencil, searchOutline, trash } from "ionicons/icons";
import { useEffect, useState } from "react";
import "./MuestraStatus.css";
import { useHistory } from "react-router";
import { removeCredito, searchStatus } from "./MuestraStatusApi";
import Status from "./Status";

interface ContainerProps {}

const EditarCreditoStatus: React.FC<ContainerProps> = () => {
  return (
    <IonContent>
      <IonCard className="containerTable">
        <IonTitle>Editar Status</IonTitle>
        <IonItem className="conteiner" lines="none">
          <IonGrid>
            <IonRow className="containerForm">
              <IonItem className="containerInputs containerInputUsuario">
                <IonLabel position="fixed">Status</IonLabel>
                <IonSelect placeholder="Seleccionar Status">
                  <IonSelectOption value="1">Activo</IonSelectOption>
                  <IonSelectOption value="0">Inactivo</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem className="containerInputs containerInputPassword">
                <IonLabel position="fixed">Nombre</IonLabel>
                <IonInput type="text" name="nombre" id="nombre" />
              </IonItem>
              <IonButton size="small" class="btnEntrar">
                Guardar Cambios
              </IonButton>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonCard>
    </IonContent>
  );
};

export default EditarCreditoStatus;
