import {
  IonButton,
  IonCard,
  IonContent,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import Firma from "./Firma";
import "./Firmas.css";
import { saveFirma } from "./Firmas_UnidadesApi";
const Agregar_firma: React.FC = () => {
  const id = useParams<{ id: string }>();
  const history = useHistory();
  const [firma, setFirma] = useState<Firma>({});

  const save = async () => {
    let result = await saveFirma(firma);
    history.push("/Firmas_Unidades");
  };

  return (
    <IonContent>
      <IonCard className="containerTable">
        <IonTitle>Agregar Firma</IonTitle>
        <IonItem className="conteiner" lines="none">
          <IonGrid>
            <IonRow className="containerForm">
              <IonItem className="containerInputs containerInputUsuario">
                <IonLabel position="fixed">Status</IonLabel>
                <IonSelect
                  placeholder="Seleccionar Status"
                  onIonChange={(e) => (firma.activo = e.detail.value)}
                >
                  <IonSelectOption value={true}>Activo</IonSelectOption>
                  <IonSelectOption value={false}>Inactivo</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem className="containerInputs containerInputPassword">
                <IonLabel position="fixed">Nombre</IonLabel>
                <IonInput
                  type="text"
                  name="nombre"
                  id="nombre"
                  onIonChange={(e) =>
                    (firma.nombre = String(e.detail.value))
                  }
                />
              </IonItem>
              <IonItem className="containerInputs containerInputPassword">
                <IonLabel position="fixed">Dias de Promesa</IonLabel>
                <IonInput
                  type="number"
                  name="diasPromesa"
                  id="diasPromesa"
                  onIonChange={(e) =>
                    (firma.diasPromesa = Number(e.detail.value))
                  }
                />
              </IonItem>
              <IonButton size="small" class="btnEntrar" onClick={save}>
                Guardar Firma
              </IonButton>
            </IonRow>

          </IonGrid>
        </IonItem>
      </IonCard>
    </IonContent>
  );
};

export default Agregar_firma;
