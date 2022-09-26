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
import { pencil, search, trash } from "ionicons/icons";
import { useHistory } from "react-router";
import NavButtons from "../NavButtons";

function Unidades_Negocio() {
  const history = useHistory();
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState("Levi te amo");

  function confirm() {
    modal.current?.dismiss(input.current?.value, "confirm");
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === "confirm") {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  const [unidadesNegocio, setUnidadesNegocio] = useState([]);
  const idFirma = useParams<{ id: string }>();

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    let result = await searchUnidadById(String(idFirma.id));
    setUnidadesNegocio(result);
  };

  const remove = async (id: Number) => {
    await removeUnidadNegocio(id, Number(idFirma.id));
    search();
  };

  const edit = (id: String) => {
    history.push(`/Unidades_Negocio/${idFirma.id}/Unidades_Negocio_Edit/${id}`);
  };

  return (
    <IonPage>
      <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Firmas y Unidades de negocio</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
        <IonCard>
          <IonGrid className="table">
            <IonRow id="headerTable">
              <IonCol>Id</IonCol>
              <IonCol>Status</IonCol>
              <IonCol>Nombre</IonCol>
              <IonCol>Script</IonCol>
              <IonCol>Firma Id</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
            {unidadesNegocio.map((unidadNegocio: UnidadesNegocio) => (
              <IonRow>
                <IonCol>{unidadNegocio.id}</IonCol>
                <IonCol>
                  {unidadNegocio.activo == true ? "Activo" : "Inactivo"}
                </IonCol>
                <IonCol>{unidadNegocio.nombre}</IonCol>
                <IonCol>{unidadNegocio.script}</IonCol>
                <IonCol>{idFirma.id}</IonCol>
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
    </IonPage>
  );
}
export default Unidades_Negocio;
