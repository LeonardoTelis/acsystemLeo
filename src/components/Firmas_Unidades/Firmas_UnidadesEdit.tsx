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
  //import "./MuestraStatus.css";
  import { useHistory } from "react-router";
  import { removeFirma, searchFirma } from "./Firmas_UnidadesApi";
  import Firmas from "./Firma";
  import { NavButtons } from "../NavButtons";
  import "./Firmas.css";
  
  interface ContainerProps {}
  
  const Firmas_UnidadesEdit: React.FC<ContainerProps> = () => {
    return (
      
      <IonContent>
        <IonCard className="containerTable">
          <IonTitle>Editar Firma</IonTitle>
          <IonItem className="conteiner" lines="none">
            <IonGrid>
              <IonRow className="containerForm">
                <IonItem className="containerInputs containerInputUsuario">
                  <IonLabel position="fixed">Status</IonLabel>
                  <IonSelect placeholder="Seleccionar Status">
                    <IonSelectOption value="1">Activo</IonSelectOption>
                    <IonSelectOption value="0">inactivo</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem className="containerInputs containerInputPassword">
                  <IonLabel position="fixed">Dias <br></br>Promesa</IonLabel>
                  <IonInput type="text" name="nombre" id="nombre" />
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
  
  export default Firmas_UnidadesEdit;
  