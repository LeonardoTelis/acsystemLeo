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
import { NavButtons } from "../NavButtons";
import Unidades from "./Unidades";
import {
  editUnidadNegocio,
  searchUnidadNegocioById,
} from "./Unidades_NegocioApi";
// import "./Firmas.css";

interface ContainerProps {}

const Unidades_Negocio_Edit: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const id = useParams<{ idFirma: string; idUnidadNegocio: string }>();
  const [unidadNegocio, setUnidadNegocio] = useState<Unidades>({});
  console.table(id);
  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    let result = await searchUnidadNegocioById(
      String(id.idFirma),
      String(id.idUnidadNegocio)
    );
    setUnidadNegocio(result);
  };

  const edit = async () => {
    await editUnidadNegocio(
      unidadNegocio,
      String(id.idFirma),
      String(id.idUnidadNegocio)
    );
    history.push("/Firmas_Unidades");
  };
  return (
    <IonContent>
      <IonCard className="containerTable">
        <IonTitle>Editar Unidad de Negocio</IonTitle>
        <IonItem className="conteiner" lines="none">
          <IonGrid>
            <IonRow className="containerForm">
              <IonItem className="containerInputs containerInputUsuario">
                <IonLabel position="fixed">Status</IonLabel>
                <IonSelect
                  placeholder="Seleccionar Status"
                  onIonChange={(e) => (unidadNegocio.activo = e.detail.value)}
                  value={unidadNegocio.activo}
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
                  value={unidadNegocio.nombre}
                  onIonChange={(e) =>
                    (unidadNegocio.nombre = String(e.detail.value))
                  }
                />
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

export default Unidades_Negocio_Edit;
