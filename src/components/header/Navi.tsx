// Navi.tsx
import './navbar.css';
import { Font } from '../Font';  // Importa tu componente Font
import { faHome, faLeaf, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos necesarios

function Navi() {

    return (
        <div>
            <nav className='icons'>
                <div className="start">
                    <Font css="iconos" icon={faCog} /> {/* Icono de configuración */}
                    <Font css="iconos" icon={faLeaf} /> {/* Icono de hoja */}
                    <Font css="iconos" icon={faHome} /> {/* Icono de casa */}
                </div>
                <div className="end">
                <Font css="iconos" icon={faSignOutAlt} /> {/* Icono de salida */}
                </div>
            </nav>
            <nav className='menu'>  
                <div className="slogan">
                    <h1>GUYP</h1>
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
