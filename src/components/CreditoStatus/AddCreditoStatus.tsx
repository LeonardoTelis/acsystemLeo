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
  import { searchCreditoById, editCredito } from "./MuestraStatusApi";
  import Status from "./Status";
  
  interface ContainerProps {}
  
  const AddCreditoStatusComponent: React.FC<ContainerProps> = () => {
    const id = useParams<{id:string;}>();
    const history = useHistory();
    const [creditos, setCreditos] = useState<Status>({})
  
    useEffect(() =>{
      search();
    },[]);
  
    const search = async () =>{
      let result = await searchCreditoById(String(id.id));
      setCreditos(result)
    }
  
    const edit = async () => {
      let response = await editCredito(creditos);
      if(response){
        history.push("/CreditoStatus");
      }
    }

    return (
      <IonContent>
        <IonCard className="containerTable">
          <IonTitle>Crear nuevo credito</IonTitle>
          <IonItem className="conteiner" lines="none">
            <IonGrid>
              <IonRow className="containerForm">
                {/* <IonItem className="containerInputs containerInputUsuario">
                  <IonLabel position="fixed">Status</IonLabel>
                  <IonSelect placeholder="Seleccionar Status" onIonChange={(e) => (creditos.activo = (e.detail.value))} value={creditos.activo}>
                    <IonSelectOption value={true}>Activo</IonSelectOption>
                    <IonSelectOption value={false}>Inactivo</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem className="containerInputs containerInputPassword">
                  <IonLabel position="fixed">Nombre</IonLabel>
                  <IonInput type="text" name="nombre" id="nombre" value={creditos.nombre} onIonChange={(e) => (creditos.nombre = (String(e.detail.value)))}/>
                </IonItem> */}
                <IonButton size="small" class="btnEntrar" onClick={edit}>
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
  