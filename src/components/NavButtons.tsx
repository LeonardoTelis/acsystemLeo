import { IonButton, IonCard, IonCardContent, IonIcon, IonItem, IonLabel, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";
import "./navbar.css";


 export const NavButtons = () =>{
    const [mQuery, setQuery] = React.useState<any>({
        matches: window.innerWidth > 768 ? true : false,
    });

    useEffect(() => {
        window.matchMedia("(min-width: 760px)").addListener(setQuery);
    },[]);

    return (
        <div className="menu">
            {mQuery && !mQuery.matches ? (
                <IonMenuButton color="primary"/>
            ) : (
                <>
   
                <IonButton routerLink={"/reporteproduct"}>ReporteProd</IonButton>
                <IonButton routerLink={"/Promesas"}>Promesas</IonButton>
                <IonButton routerLink={"/Pagos"}>Pagos</IonButton>
                <IonButton routerLink={"/Importar"}>Importar</IonButton>
                <IonButton routerLink={"/Exportar"}>Exportar</IonButton>
                <IonButton routerLink={"/Usuarios"}>Usuarios</IonButton>
                <IonButton routerLink={"/Asignacion"}>Asignación</IonButton>
                <IonButton routerLink={"/Reportes"}>Reportes</IonButton>
                <IonButton routerLink={"/Graficas"}>Graficas</IonButton>
<<<<<<< HEAD
                <IonButton routerLink={"/Firmas_Unidades"}>Firmas y Unidades de negocio</IonButton>
             
        
                
=======
                <IonButton routerLink={"/Firmas_unid"}>Firmas <br/> Unidad</IonButton>
                <IonButton routerLink={"/CreditoStatus"}>Credito Status</IonButton>
>>>>>>> 9a0e01b65d78e6f6b56f9248f6c1a0dbc363e6eb
                </>
            )}
        </div>
    );
 };
export default NavButtons;