import {
  IonContent,
  IonPage,
} from "@ionic/react";
import { Redirect } from "react-router";
import ExploreContainer from "../components/ExploreContainer";
import ValidarToken from "../components/Login/ValidarToken";

const Acsystem: React.FC = () => {
  if(!ValidarToken()){
    return <Redirect to="/Login" />;
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer></ExploreContainer>
      </IonContent>
    </IonPage>
  );
};

export default Acsystem;
