import "./Home.css";

import { Card } from "../../components/Card/Card";

import glasses from "./../../assets/images/glasses.jpg";
import coders from "./../../assets/images/coders.jpg";

export const Home = () => {
    return(
        <main className='homeContainer' >
            <Card text="Postulantes" image={glasses} />
            <Card text="Admitidos" image={coders} />
        </main>
    )
}
