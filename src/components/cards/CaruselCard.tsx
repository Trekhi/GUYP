import React, { useState } from "react";
import "./card-icons.css"; // Estilos
import { CardIcons } from "./Card-icons"; // Componente de la tarjeta
import { faHome, faLeaf, faCog } from "@fortawesome/free-solid-svg-icons"; // Iconos

const cardsData = [
  { icon: faLeaf, title: "Guía de cuidado de plantas", text: "Lorem ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500." },
  { icon: faHome, title: "Consejos de cuidados", text: "Lorem ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500." },
  { icon: faCog, title: "Registro diario de cuidado", text: "Lorem ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500." },
];

export function CaruselCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-control-prev" onClick={prevSlide}>
        &#8249; {}
      </button>
      <div className="carousel-items">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active" : ""}`}
          >
            <CardIcons icon={card.icon} title={card.title} text={card.text} />
          </div>
        ))}
      </div>
      <button className="carousel-control-next" onClick={nextSlide}>
        &#8250; 
      </button>
    </div>
  );
}

export default CaruselCard;
