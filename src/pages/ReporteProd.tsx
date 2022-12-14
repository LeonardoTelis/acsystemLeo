import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonGrid, IonHeader, IonImg, IonItem, IonLabel, IonModal, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react";
import contac_center from "../img/contac_center.jpg";
import React from "react";
import { NavButtons } from '../components/NavButtons';
import ValidarToken from "../components/Login/ValidarToken";
import { Redirect } from "react-router";

const ReporteProd: React.FC = () => {

    const options = {
        cssClass: 'my-custom-interface',//_____
    

      };

      if(!ValidarToken()){
        return <Redirect to="/Login" />;
      }
return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="end">
            <NavButtons/>
            </IonButtons>
        </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <br/><br/>
    <IonCard >
        <IonHeader>
        <IonRow>
           <IonRow/>
            <IonCol>
                <h2>Seleccione filtros para el reporte</h2>
            <IonCol/>
            <IonRow/>
        
            <IonRow>
        <IonCol className="containerLogo"><img src={contac_center}/></IonCol>
            </IonRow>
        
            <IonItem>
          <IonLabel>Firma</IonLabel>
          <IonSelect interface="popover" interfaceOptions={options}>
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
            </IonItem>

            


            <IonItem>
          <IonLabel>Unidad de negocio</IonLabel>
          <IonSelect interface="popover" interfaceOptions={options}>
            <IonSelectOption value="brown">Brown</IonSelectOption>
            <IonSelectOption value="blonde">Blonde</IonSelectOption>
            <IonSelectOption value="black">Black</IonSelectOption>
            <IonSelectOption value="red">Red</IonSelectOption>
          </IonSelect>
            </IonItem>

            <IonItem>
                    <IonLabel position="fixed">Fecha </IonLabel>
                    <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
                        <IonModal keepContentsMounted={true}>
                    <IonDatetime id="datetime"></IonDatetime>
                    </IonModal>
                </IonItem><br/>
                <IonButton shape="round">Mostrar</IonButton>
            </IonCol>
            </IonRow>
            <IonCol></IonCol>
        
         </IonHeader>
        </IonCard>
    </IonContent>
  
</IonPage>

);
};
export default ReporteProd;