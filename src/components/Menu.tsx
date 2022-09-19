import React from "react";
import { 
    IonContent, 
    IonHeader, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonMenu, 
    IonMenuToggle, 
    IonTitle, 
    IonToolbar 
} from "@ionic/react";

export const Menu = () =>{
    return (
        <IonMenu side="end" contentId="Menu">
            <IonHeader>
                <IonToolbar color="light">
                    <IonTitle>MENU</IonTitle>
                </IonToolbar>
            </IonHeader >
            <IonContent>
                <IonList>
                    <IonMenuToggle auto-Hide="false">
                        <IonItem button routerLink={"/ReporteProd"} routerDirection="none">
                            <IonLabel>Reporte Prod</IonLabel>
                        </IonItem>
                    </IonMenuToggle>

                    <IonMenuToggle auto-Hide="false">
                        <IonItem button routerLink={"/Promesas"} routerDirection="none">
                            <IonLabel>Promesas</IonLabel>
                        </IonItem>
                    </IonMenuToggle>

                    <IonMenuToggle auto-Hide="false">
                        <IonItem button routerLink={"/Pagos"} routerDirection="none">
                            <IonLabel>Pagos</IonLabel>
                        </IonItem>
                    </IonMenuToggle>

                    <IonMenuToggle auto-Hide="false">
                        <IonItem button routerLink={"/Importar"} routerDirection="none">
                            <IonLabel>Importar</IonLabel>
                        </IonItem>
                    </IonMenuToggle>

                    <IonMenuToggle auto-Hide="false">
                        <IonItem button routerLink={"/Exportar"} routerDirection="none">
                            <IonLabel>Exportar</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
