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
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import "./Firmas.css";
import UnidadesNegocio from "../Unidades_Negocio/Unidades";
import {
  business,
  businessOutline,
  businessSharp,
  checkmark,
  pencil,
  trash,
} from "ionicons/icons";
import "./Firmas.css";
import { removeFirma, searchFirma } from "./Firmas_UnidadesApi";
import Firma from "./Firma";
import Firmas_UnidadesEdit from "./Firmas_UnidadesEdit";
import { useHistory } from "react-router";
import { error } from "console";
// import { Container } from "react-dom";
// import Unidades_Negocio from "../Unidades_Negocio/Unidades_Negocio";

interface ContainerProps {}

const Firmas_Unidades: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const [firmas, setFirmas] = useState([]);
  let [firmaID, setFirmaID] = useState<any>();
  const [searchFirmas,setSearchFirmas] = useState("");

  useEffect(() => {
    searchUnidadesNegocio();
  }, [history.location.pathname]);

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
          {/* <IonTitle>Firmas y Unidades de negocio</IonTitle> */}
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <br></br>
      <IonCard className="containerTable">
        <br></br>
        <IonTitle>Firmas</IonTitle>
        <IonItem className="containerInputs containerInputPassword">
          <input type="text" name="" id="" placeholder="Buscar Id" onChange={(event) =>{
            setSearchFirmas(String(event.target.value))
          }} />
        </IonItem>

        <IonGrid className="table">
          <IonRow id="headerTable">
            <IonCol>ID</IonCol>
            <IonCol>Status</IonCol>
            <IonCol>Dias promesa</IonCol>
            <IonCol>Nombre</IonCol>
            <IonCol>Acciones</IonCol>
          </IonRow>
          {firmas.filter((firmas:any) => {
            if(searchFirmas == ""){
              return firmas
            }else if(String(firmas.id).toLowerCase().includes(searchFirmas.toLocaleUpperCase())){
              return firmas
            }
          }).map((firmas: any) => (
            <IonRow>
              <IonCol>{firmas.id}</IonCol>
              <IonCol>{firmas.activo == true ? "Activo" : "Inactivo"}</IonCol>
              <IonCol>{firmas.diasPromesa}</IonCol>
              <IonCol>{firmas.nombre}</IonCol>

              <IonCol>
                <IonButton
                  color="primary"
                  fill="clear"
                  shape="round"
                  size="small"
                  onClick={() => edit(String(firmas.id))}
                >
                  <IonIcon icon={pencil} slot="icon-only" />
                </IonButton>
                <IonButton
                  color="danger"
                  fill="clear"
                  shape="round"
                  size="small"
                  onClick={() => remove(Number(firmas.id))}
                >
                  <IonIcon icon={trash} slot="icon-only" />
                </IonButton>

                <IonButton
                  color="success"
                  fill="clear"
                  shape="round"
                  id="open-modal"
                  size="small"
                  onClick={() => Unidades(String(firmas.id))}
                >
                  <IonIcon icon={business}></IonIcon>
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
