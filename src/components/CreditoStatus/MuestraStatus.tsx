// (event.target as HTMLInputElement).value
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
  IonSearchbar,
  IonTitle,
} from "@ionic/react";
import { pencil, searchOutline, trash } from "ionicons/icons";
import { useEffect, useState } from "react";
import "./MuestraStatus.css";
import { useHistory } from "react-router";
import { removeCredito, searchStatus } from "./MuestraStatusApi";
import Status from "./Status";

interface ContainerProps {}

const MuestraStatus: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const [creditos, setCreditos] = useState([]);
  let [statusID, setStatusID] = useState<any>();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchCreditos();
  }, [history.location.pathname]);

  const searchCreditos = async () => {
    let result = await searchStatus();
    setCreditos(result);
  };

  const remove = async (id: Number) => {
    await removeCredito(id);
    searchCreditos();
  };

  const edit = (id: String) => {
    history.push("/CreditoStatus/edit/" + id);
  };

  return (
    <IonContent>
      <IonCard className="containerTable">
        <IonTitle>Gestion de los status</IonTitle>
        <IonSearchbar 
          placeholder="Buscar por ID"
          onIonChange={(e) => setSearchTerm(e.detail.value!)}
        ></IonSearchbar>
        <IonGrid className="table">
          <IonRow id="headerTable">
            <IonCol>ID</IonCol>
            <IonCol>Status</IonCol>
            <IonCol>Nombre</IonCol>
            <IonCol>Acciones</IonCol>
          </IonRow>
          {creditos
            .filter((credito: any) => {
              if (searchTerm == "") {
                return credito;
              } else if (
                String(credito.id)
                  .toLowerCase()
                  .includes(searchTerm.toLocaleUpperCase())
              ) {
                return credito;
              }
            })
            .map((credito: Status) => (
              <IonRow>
                <IonCol>{credito.id}</IonCol>
                <IonCol>
                  {credito.activo == true ? "Activo" : "Inactivo"}
                </IonCol>
                <IonCol>{credito.nombre}</IonCol>
                <IonCol>
                  <IonButton
                    color="primary"
                    fill="clear"
                    shape="round"
                    onClick={() => edit(String(credito.id))}
                  >
                    <IonIcon icon={pencil} slot="icon-only" />
                  </IonButton>
                  <IonButton
                    color="danger"
                    fill="clear"
                    shape="round"
                    onClick={() => remove(Number(credito.id))}
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
};

export default MuestraStatus;
