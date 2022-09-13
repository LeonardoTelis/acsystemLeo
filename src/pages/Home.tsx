import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import FormLogin from '../components/FormLogin';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <ExploreContainer /> */}
        <FormLogin></FormLogin>
      </IonContent>
    </IonPage>
  );
};

export default Home;
