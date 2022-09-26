import { IonCard, IonContent, IonInput } from "@ionic/react"
import { ChangeEvent, useRef } from "react";
import { setTimeout } from "timers";
import { timeout } from "workbox-core/_private";
import { NavButtons } from "../NavButtons";


const searchBar = () =>{


return (
<IonContent>
    <IonCard>
    <IonInput type="text" className="form-control" placeholder="ID"
    />
    </IonCard>
</IonContent>
    ) 
}

export default searchBar