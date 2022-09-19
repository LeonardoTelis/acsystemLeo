import { IonContent, IonPage } from "@ionic/react";
import { Redirect } from "react-router";

import FormLogin from "../components/Login/FormLogin";
import ValidarToken from "../components/Login/ValidarToken";

const Login: React.FC = () => {
  if (ValidarToken()) {
    return <Redirect to="/reporteproduct" />;
  }
  return (
    <IonPage>
      <IonContent fullscreen>
        <FormLogin></FormLogin>
      </IonContent>
    </IonPage>
  );
};

export default Login;
