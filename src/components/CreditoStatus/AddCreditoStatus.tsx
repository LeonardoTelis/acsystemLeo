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
  import { } from "ionicons/icons";
  import { useEffect, useState } from "react";
  import "./MuestraStatus.css";
  import { useHistory, useParams } from "react-router";
  import { searchCreditoById, editCredito, saveCredito } from "./MuestraStatusApi";
  import Status from "./Status";
  
  interface ContainerProps {}
  
  const AddCreditoStatusComponent: React.FC<ContainerProps> = () => {
    const id = useParams<{id:string;}>();
    const history = useHistory();
    const [creditos, setCreditos] = useState<Status>({})
  
    const save = async () =>{
      let result = await saveCredito(creditos);
      history.push("/CreditoStatus");
    }

    return (
      <IonContent>
        <IonCard className="containerTable">
          <IonTitle>Crear nuevo credito</IonTitle>
          <IonItem className="conteiner" lines="none">
            <IonGrid>
              <IonRow className="containerForm">
                <IonItem className="containerInputs containerInputUsuario">
                  <IonLabel position="fixed">Status</IonLabel>
                  <IonSelect placeholder="Seleccionar Status" onIonChange={(e) => (creditos.activo = (e.detail.value))}>
                    <IonSelectOption value={true}>Activo</IonSelectOption>
                    <IonSelectOption value={false}>Inactivo</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem className="containerInputs containerInputPassword">
                  <IonLabel position="fixed">Nombre</IonLabel>
                  <IonInput type="text" name="nombre" id="nombre" onIonChange={(e) => (creditos.nombre = (String(e.detail.value)))}/>
                </IonItem>
                <IonButton size="small" class="btnEntrar" onClick={save}>
                  Guardar Credito
                </IonButton>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonCard>
      </IonContent>
    );
  };
  
  export default AddCreditoStatusComponent;
  