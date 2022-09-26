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
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { pencil, searchOutline, trash } from "ionicons/icons";
import { useEffect, useState } from "react";
//import "./MuestraStatus.css";
import { useHistory, useParams } from "react-router";
import { editFirma, removeFirma, searchFirma, searchFirmaById } from "./Firmas_UnidadesApi";
import Firmas from "./Firma";
import { NavButtons } from "../NavButtons";
import "./Firmas.css";

interface ContainerProps {}

const Firmas_UnidadesEdit: React.FC<ContainerProps> = () => {
  const id = useParams<{ id: string }>();
  const history = useHistory();
  const [firma, setFirma] = useState<Firmas>({});

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    let result = await searchFirmaById(String(id.id));
    setFirma(result);
  };

  const edit = async () => {
    let response = await editFirma(firma);
    if(response){
      history.push("/Firmas_Unidades");
    }
  };
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Firma</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <br></br>
      <IonCard className="containerTable">
        <IonTitle>Editar Firma</IonTitle>
        <IonItem className="conteiner" lines="none">
          <IonGrid>
            <IonRow className="containerForm">
              <IonItem className="containerInputs containerInputUsuario">
                <IonLabel position="fixed">Status</IonLabel>
                <IonSelect placeholder="Seleccionar Status" onIonChange={(e) => (firma.activo = (e.detail.value))} value={firma.activo}>
                  <IonSelectOption value={true}>Activo</IonSelectOption>
                  <IonSelectOption value={false}>Inactivo</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem className="containerInputs containerInputPassword">
                <IonLabel position="fixed">
                  Dias <br></br>Promesa
                </IonLabel>
                <IonInput type="text" name="diasPromesa" id="diasPromesa" value={firma.diasPromesa} onIonChange={(e) => (firma.diasPromesa = (Number(e.detail.value)))}/>
              </IonItem>
              <IonItem className="containerInputs containerInputPassword">
                <IonLabel position="fixed">Nombre</IonLabel>
                <IonInput type="text" name="nombre" id="nombre" value={firma.nombre} onIonChange={(e) => (firma.nombre = (String(e.detail.value)))}/>
              </IonItem>
              <IonButton size="small" class="btnEntrar" onClick={edit}>
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
