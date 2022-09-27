import React, { useState, useRef, useEffect } from "react";
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
  IonCard,
} from "@ionic/react";
import "./Unidades.css";
import { OverlayEventDetail } from "@ionic/core/components";
import { removeUnidadNegocio, searchUnidadById } from "./Unidades_NegocioApi";
import { useParams } from "react-router";
import UnidadesNegocio from "./Unidades";
import Agregar_Unidad from "./Agregar_Unidad";
import { add, pencil, search, trash } from "ionicons/icons";
import { useHistory } from "react-router";
import NavButtons from "../NavButtons";

function Unidades_Negocio() {
  const history = useHistory();

  const [unidadesNegocio, setUnidadesNegocio] = useState([]);
  const idFirma = useParams<{ id: string }>();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const search = async () => {
    let result = await searchUnidadById(Number(idFirma.id));
    setUnidadesNegocio(result);
  };

  const remove = async (id: Number) => {
    await removeUnidadNegocio(id, Number(idFirma.id));
    search();
  };

  const edit = (id: String) => {
    history.push(`/Unidades_Negocio/${idFirma.id}/Unidades_Negocio_Edit/${id}`);
  };

  const addUnidades = () => {
    history.push("/Agregar_Unidad/add");
  };

  return (
    <IonContent>
      <IonCard>
        <IonItem lines="none">
          <IonTitle>Unidades de Negocio</IonTitle>
          <IonButton color="primary" fill="solid" onClick={() => addUnidades()}>
            <IonIcon icon={add}></IonIcon>
            Agregar Unidad
          </IonButton>
        </IonItem>
        <IonGrid className="table">
          <IonRow id="headerTable">
            <IonCol>Id</IonCol>
            <IonCol>Status</IonCol>
            <IonCol>Nombre</IonCol>
            <IonCol>Script</IonCol>
            <IonCol>Firma Id</IonCol>
            <IonCol>Acciones</IonCol>
          </IonRow>
          {unidadesNegocio.map((unidadNegocio: any) => (
            <IonRow>
              <IonCol>{String(unidadNegocio.id)}</IonCol>
              <IonCol>
                {unidadNegocio.activo == true ? "Activo" : "Inactivo"}
              </IonCol>
              <IonCol>{unidadNegocio.nombre}</IonCol>
              <IonCol>{unidadNegocio.script}</IonCol>
              <IonCol>{String(idFirma.id)}</IonCol>
              <IonCol>
                <IonButton
                  color="primary"
                  fill="clear"
                  shape="round"
                  onClick={() => edit(String(unidadNegocio.id))}
                >
                  <IonIcon icon={pencil} slot="icon-only" />
                </IonButton>
                <IonButton
                  color="danger"
                  fill="clear"
                  shape="round"
                  onClick={() => remove(Number(unidadNegocio.id))}
                >
                  <IonIcon icon={trash} slot="icon-only" />
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonCard>
    </IonContent>
  );
}
export default Unidades_Negocio;
