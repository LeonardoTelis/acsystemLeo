import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login";
import ReporteProd from "./pages/ReporteProd";
import Promesas from "./pages/Promesas";
import Pagos from "./pages/Pagos";
import Importar from "./pages/Importar";
import Exportar from "./pages/Exportar";
import Usuarios from "./pages/Usuarios";
import Asignacion from "./pages/Asignacion";
import Reportes from "./pages/Reportes";
import Graficas from "./pages/Graficas";
import CreditoStatus from "./pages/CreditoStatus";
import Firmas_Unidades from "../src/components/Firmas_Unidades/Firmas_Unidades";
import Firmas_UnidadesEdit from "../src/components/Firmas_Unidades/Firmas_UnidadesEdit";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <Menu/> */}
      <IonRouterOutlet id="main">
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/reporteproduct">
          <ReporteProd></ReporteProd>
        </Route>
        <Route path="/Promesas" component={Promesas} exact={true} />
        <Route path="/Pagos" component={Pagos} exact={true} />
        <Route path="/Importar" component={Importar} exact={true} />
        <Route path="/Exportar" component={Exportar} exact={true} />
        <Route path="/Usuarios" component={Usuarios} exact={true} />
        <Route path="/Asignacion" component={Asignacion} exact={true} />
        <Route path="/Reportes" component={Reportes} exact={true} />
        <Route path="/Graficas" component={Graficas} exact={true} />
        <Route path="/Firmas_Unidades" component={Firmas_Unidades} exact={true} />
        <Route path="/Firmas_UnidadesEdit" component={Firmas_UnidadesEdit} exact={true} />
        <Route path="/CreditoStatus" exact={true}>
          <CreditoStatus></CreditoStatus>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
