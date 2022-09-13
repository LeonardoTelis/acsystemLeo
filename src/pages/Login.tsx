import {
  IonContent,
  IonPage,
} from "@ionic/react";

import FormLogin from "../components/FormLogin";
import "./Home.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <ExploreContainer /> */}
        <FormLogin></FormLogin>
      </IonContent>
    </IonPage>
  );
};

export default Login;
