import "./card-icons.css";
import { Font } from "../Font"; //Componenetes Icons
import { IconProp } from "@fortawesome/fontawesome-svg-core";

//Props Argumentos para la función

interface InfoCard {
  icon: IconProp;
  title?: string;
  text?: string;
}

export function CardIcons(Props: InfoCard) {
  const { icon, title, text } = Props;

  return (
    
    <div className="card">
      <Font css="icon" icon={icon} />

      <h3>{title ? title : "Consejos de Cuidados"}</h3>
      <p>
        {text
          ? text
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore provident assumenda excepturi neque. Ab magni commodi"}
      </p>
    </div>
  );
}


export default CardIcons;
