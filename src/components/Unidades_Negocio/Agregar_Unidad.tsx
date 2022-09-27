import { IonButton, IonCard, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption, IonTitle } from "@ionic/react";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import Status from "../CreditoStatus/Status";
import UnidadesNegocio from "./Unidades";
import  "./Unidades.css"; 
import { saveUnidad } from "./Unidades_NegocioApi";

interface ContainerProps {}
  
const Agregar_Unidad: React.FC<ContainerProps> = () =>{
    const id = useParams<{id:string;}>();
    const history = useHistory();
    const [unidad, setUnidades] = useState<UnidadesNegocio>({})

    const save = async () => {
        let response = await saveUnidad(unidad,id.id);
        if(response){
          history.push(`/Unidades_Negocio/${id.id}`);
        }
      }

return(
    <IonContent>
        <IonCard className="containerTable">
        <IonTitle>Crear Nueva Unidad de negocio</IonTitle>
            <IonItem className="conteiner" lines="none">
                <IonGrid>
                <IonRow className="containerForm">
                <IonItem className="containerInputs containerInputUsuario">
                  <IonLabel position="fixed">Status</IonLabel>
                  <IonSelect placeholder="Seleccionar Status" onIonChange={(e) => (unidad.activo = (e.detail.value))} value={unidad.activo}>
                    <IonSelectOption value={true}>Activo</IonSelectOption>
                    <IonSelectOption value={false}>Inactivo</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem className="containerInputs containerInputPassword">
                  <IonLabel position="fixed">Nombre</IonLabel>
                  <IonInput type="text" name="nombre" id="nombre" value={unidad.nombre} onIonChange={(e) => (unidad.nombre = (String(e.detail.value)))}/>
                </IonItem>
                <IonItem className="containerInputs containerInputPassword">
                  <IonLabel position="fixed">Script</IonLabel>
                  <IonInput type="text" name="nombre" id="nombre" value={unidad.script} onIonChange={(e) => (unidad.script = (String(e.detail.value)))}/>
                </IonItem>
                <IonButton size="small" class="btnEntrar" onClick={save}>
                  Guardar Unidad de Negocio
                </IonButton>
              </IonRow>
                </IonGrid>
            </IonItem>


        </IonCard>
    </IonContent>


);
};


export default Agregar_Unidad;