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
import { removefirma, searchFirma } from "./Firmas_UnidadesApi";
import Firmas from "./Firma";
import Firmas_UnidadesEdit from "./Firmas_UnidadesEdit";
import { useHistory } from "react-router";

const Firmas_Unidades: React.FC = () => {
  const [firmas, setFirmas] = useState([]);
  const history = useHistory();
  useEffect(() => {
    searchUnidadesNegocio();
  }, []);

  const searchUnidadesNegocio = async () => {
    let result = await searchFirma(2);
    result.activo = (result.activo == true) ? "Activo" : "Inactivo";
    setFirmas(result);
  };

  const firma = (id: string) =>{
    history.push('../Firmas_Unidades/Firmas_UnidadesEdit.tsx' +id);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Firmas y Unidades de negocio</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <br></br>
        <IonCard>
          <br></br>
          <IonTitle>Firmas</IonTitle>
          <IonItem>
            <IonLabel position="floating">ID</IonLabel>
            <IonInput value={""}></IonInput>
          </IonItem>

          <IonItem>
            <IonButton color="primary" fill="solid" slot="end" size="default">
              <IonIcon icon={checkmark} />
              Consultar
            </IonButton>
          </IonItem>
        </IonCard>

        <br />
        <br />
        <IonCard>
          <br></br>
          <IonItem>
            <IonTitle>Unidades de negocio</IonTitle>
            <br></br>
          </IonItem>
          <br></br>
          <IonRow id="headerTable">
            <IonCol>Nombre</IonCol>
            <IonCol>Activo</IonCol>
            <IonCol>Dias Promesa</IonCol>
            <IonCol>Acciones</IonCol>
          </IonRow>

          <IonGrid className="table">
          {/* {firmas.map((firma: Firmas) => (
          <IonRow>
                <IonCol>{firma.id}</IonCol>
                <IonCol>{(firma.activo == true) ? "Activo" : "Inactivo"}</IonCol>
                <IonCol>{String(firma.dias_promesa)}</IonCol>
                <IonCol>{firma.nombre}</IonCol>
                <IonCol>
                  <IonButton color="primary" fill="clear" shape="round">
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton color="danger" fill="clear" shape="round">
                    <IonIcon icon={trash} slot="icon-only" />
                  </IonButton>
                </IonCol>
              </IonRow>
            ))} */}
              {/* // <div key={index}>
              //   <p> {key}: {firmas[key]}</p>
              // </div> */}
              <IonRow>
              {Object.keys(firmas).map((key : any, index) => {
               return(
                <IonCol key={index}>{firmas[key]}</IonCol>
              );
            })}
            <IonCol>
                  <IonButton onClick={() => removefirma('')} color="primary" fill="clear" shape="round">
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>

                  <IonButton color="danger" fill="clear" shape="round">
                    <IonIcon icon={trash} slot="icon-only" />
                  </IonButton>
                </IonCol>
              </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Firmas_Unidades;

