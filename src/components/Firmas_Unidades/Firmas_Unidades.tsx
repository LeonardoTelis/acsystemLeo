import React, { useEffect, useState } from "react";
import { NavButtons } from "../NavButtons";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonMenu,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmark, pencil, trash } from "ionicons/icons";
import "./Firmas.css";
import { removeFirma,  searchFirma } from "./Firmas_UnidadesApi";
import Firma from "./Firma";
import Firmas_UnidadesEdit from "./Firmas_UnidadesEdit";
import { useHistory } from "react-router";
// import { Container } from "react-dom";
import Unidades_Negocio from "../Unidades_Negocio/Unidades_Negocio";


interface ContainerProps{}

const Firmas_Unidades: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const [firmas, setFirmas] = useState([]);
  let [firmaID, setFirmaID] = useState<any>();

  useEffect(() => {
    searchUnidadesNegocio();
  }, []);

  const searchUnidadesNegocio = async () => {
    let result = await searchFirma();
    setFirmas(result);
  };

  const remove = async (id: Number) => {
    await removeFirma(id);
    searchUnidadesNegocio();
  };

  const edit = (id: String) => {
    history.push("Firmas_UnidadesEdit/" + id);
  };

  const Unidades = (id: String) => {
    history.push("Unidades_Negocio/" + id);
  };

  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Firmas y Unidades de negocio</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
        <br></br>
        <IonCard className="containerTable">
          <br></br>
          <IonTitle >Firmas</IonTitle>
          <IonItem className="containerInputs containerInputPassword">
                  <IonLabel position="fixed">Id</IonLabel>
                  <IonInput type="text" name="nombre" id="nombre" />
                </IonItem>

          <IonGrid className="table">
          <IonRow id="headerTable">
            <IonCol>ID</IonCol>
            <IonCol>Status</IonCol>
            <IonCol>Dias promesa</IonCol>
            <IonCol>Nombre</IonCol>
            <IonCol>Acciones</IonCol>
          </IonRow>
        {firmas.map((firmas: Firma) => (
          <IonRow>
            <IonCol>{firmas.id}</IonCol>
            <IonCol>{firmas.activo == true ? "Activo" : "Inactivo"}</IonCol>
            <IonCol>{firmas.diasPromesa}</IonCol>
            <IonCol>{firmas.nombre}</IonCol>

            <IonCol>
                <IonButton color="primary" fill="clear" shape="round" onClick={() => edit(String(firmas.id))}>
                  <IonIcon icon={pencil} slot="icon-only" />
                </IonButton>
                <IonButton
                  color="danger"
                  fill="clear"
                  shape="round"
                  onClick={() => remove(Number(firmas.id))}
                >
                  <IonIcon icon={trash} slot="icon-only" />
                </IonButton>

                <IonButton id="open-modal" expand="block"
                onClick={() => Unidades(String(Unidades))}>
                  Unidades de negocio
              </IonButton>
              </IonCol>
          </IonRow>
        ))}
          </IonGrid>
        </IonCard>
    </IonContent>
  );
};

export default Firmas_Unidades;

