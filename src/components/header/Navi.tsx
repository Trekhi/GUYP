// Navi.tsx
import './navbar.css';
import { Font } from '../Font';  // Importa tu componente Font
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos necesarios
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Navi() {

    return (
        <div>
            <nav className='icons'>
                <div className="start">
                <a href="#"><Font css="iconos" icon={faFacebook} ></Font></a>
                <a href="#"><Font css="iconos" icon={faLinkedin} ></Font> </a>
                <a href="#"><Font css="iconos" icon={faWhatsapp} ></Font> </a>
                </div>
                <div className="end">
                <Font css="iconos" icon={faSignOutAlt} /> {/* Icono de salida */}
                </div>
            </nav>
            <nav className='menu'>  
                <div className="slogan">
                    <h2>GUYP</h2>
                </div>
                <div className="buttons">
                    <a href="">Inicio</a>
                    <a href="">Plantas</a>
                    <a href="">Sobre nosotros</a>
                </div>
            </nav>
        </div>
    );
}

export default Navi;
