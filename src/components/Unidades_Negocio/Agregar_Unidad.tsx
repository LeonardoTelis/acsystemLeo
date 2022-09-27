import { IonButton, IonCard, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonTitle } from "@ionic/react";
import React from "react";
import  "./Unidades.css";
const Agregar_firma: React.FC = () =>{
return(
    <IonContent>
        <IonCard className="containerTable">
        <IonTitle>Agregar Firma</IonTitle>
            <IonItem className="conteiner" lines="none">
                <IonGrid>
                    <IonRow className="containerForm">
                        <IonItem className="containerInputs containerInputPassword">
                            <IonLabel position="fixed">
                            Status
                            </IonLabel>
                             <IonInput type="text" name="diasPromesa" id="diasPromesa" />
                        </IonItem>

                        <IonItem className="containerInputs containerInputPassword">
                            <IonLabel position="fixed">
                            Dias <br/> Promesa
                            </IonLabel>
                             <IonInput type="text" name="diasPromesa" id="diasPromesa" />
                        </IonItem>

                        <IonItem className="containerInputs containerInputPassword">
                            <IonLabel position="fixed">
                            Nombre
                            </IonLabel>
                             <IonInput type="text" name="diasPromesa" id="diasPromesa" />
                        </IonItem>
                    </IonRow>

                    <IonButton  className="btn-mostrarfirma" shape="round">Agregar Firma</IonButton>
                </IonGrid>
            </IonItem>


        </IonCard>
    </IonContent>


);
};


export default Agregar_firma;