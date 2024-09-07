import "./card-icons.css";
import { Font } from "../Font"; //Componenetes Icons
import {
  faHome,
  faLeaf,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons"; //Nombre de los iconos

//Props Argumentos para la función

interface InfoCard {
  text?: string;
}

export function CardIcons(Props: InfoCard) {
  const { text } = Props;

  return (
    <div className="card">
      <Font css="icon" icon={faLeaf} />

      <h3>Consejos de Cuidados</h3>
      <p>
        {text
          ? text
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore provident assumenda excepturi neque. Ab magni commodi"}
      </p>
    </div>
  );
}

function CaruselCard() {
  return (
    <div className="carousel">
      <div className="carousel-card">
        <CardIcons/>
      </div>
      <div className="carousel-card">
        <CardIcons text="Segundo consejo" />
      </div>
      <div className="carousel-card">
        <CardIcons />
      </div>
      <div className="carousel-card">
        <CardIcons />
      </div>
      <div className="carousel-card">
        <CardIcons />
      </div>
      <div className="carousel-card">
        <CardIcons />
      </div>
    </div>
  );
}


export default CaruselCard;
