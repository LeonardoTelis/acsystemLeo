import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import { pencil, trash } from "ionicons/icons";
import { useEffect, useState } from "react";
import "./MuestraStatus.css";
import { searchStatus } from "./MuestraStatusApi";
import Status from "./Status";

interface ContainerProps {}

const MuestraStatus: React.FC<ContainerProps> = () => {
  const [creditos, setCreditos] = useState([]);

  useEffect(() => {
    searchCreditos();
  }, []);

  const searchCreditos = async () => {
    let result = await searchStatus();
    setCreditos(result);
  };
  return (
    <IonPage>
      <IonContent>
        <IonCard className="containerTable">
          <IonTitle>Gestion de los status</IonTitle>
          <IonGrid className="table">
            <IonRow id="headerTable">
              <IonCol>ID</IonCol>
              <IonCol>Status</IonCol>
              <IonCol>Nombre</IonCol>
              <IonCol>Acciones</IonCol>
            </IonRow>
            {creditos.map((credito: Status) => (
              <IonRow>
                <IonCol>{credito.id}</IonCol>
                <IonCol>{(credito.status == true) ? "Activo" : "Inactivo"}</IonCol>
                <IonCol>{credito.nombre}</IonCol>
                <IonCol>
                  <IonButton color="primary" fill="clear" shape="round">
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton color="danger" fill="clear" shape="round">
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
};

export default MuestraStatus;
