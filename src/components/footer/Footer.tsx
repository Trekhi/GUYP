import './footer.css';
import { Font } from '../Font';  
import { useState } from 'react';
import { faFacebook, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {  faPaperPlane } from '@fortawesome/free-solid-svg-icons'; 



function Footer(){
    const [email, setEmail] = useState(''); // EseState para mantener el valor del campo de entrada de correo electrónico.Cada vez que el usuario escribe en el campo de entrada, setEmail actualiza el valor del estado email con lo que el usuario ha escrito (e.target.value).

    const handleSubmit = (event: { preventDefault: () => void; }) => { //funcion handesubmit
        event.preventDefault(); // Previene recarga de la página con metodo preventdefault
        setEmail(''); // Limpia el valor del input después de enviar el formulario
    };
    
    return(
        <footer>
            <div className="containerFooter">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="box">
                            <h3>Unete</h3>
                                <ul>
                                    <li><a href='#'>Registrarse</a></li>
                                    <li><a href='#'>Iniciar sesión</a></li>
                                </ul>

                            <div className='follow'>
                                <h5>Siguenos</h5>
                                <a href="#"><Font css="iconosFooter" icon={faFacebook} ></Font></a>
                                <a href="#"><Font css="iconosFooter" icon={faLinkedin} ></Font> </a>
                                <a href="#"><Font css="iconosFooter" icon={faWhatsapp} ></Font> </a>       
                                
                            </div>
                        </div>                      
                    </div>

                    
                    <div className="col-lg-3 col-sm-6">
                        <div className="box">
                            <h3>Plantas</h3>
                            <ul>
                                <li><a href='#'>plantas populares</a></li>
                                <li><a href='#'>Plantas por temporada</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="box">
                            <h3>Nosotros</h3>
                            <ul>
                                <li><a href='#'>Sobre nosotros</a></li>
                                <li><a href='#'>Nuestros servicios</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="box">
                            <h3>Suscribete a GUYP</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                            <form onSubmit={handleSubmit}>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"value={email}
                                        onChange={(e) => setEmail(e.target.value)} required></input> 
                                    <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><Font css="iconoSearch" icon={faPaperPlane }></Font></button>
                                </div>
                            </form>
                            
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;


//onChange={(e) => setEmail(e.target.value)} required></input> cuando ocurra un evento entonces que actualice el estado de set email