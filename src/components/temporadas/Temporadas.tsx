import './temporadas.css'

function Temporadas(){
    return(                     
        <div className="tempContainer">

            <div className="entrada">
                <h1>Por temporadas</h1>
                <p>Lorem Ipsumis simplyji sdsdsf asda Lorem Ipsum jsi ipsum lorem</p>
            </div>

            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist"> 
                <li className="nav-item" role="presentation">
                    <button className="nav-link botoncito active" id="pills-verano-tab" data-bs-toggle="pill" data-bs-target="#pills-verano" type="button" role="tab" aria-controls="pills-verano" aria-selected="true">Verano</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link botoncito" id="pills-invierno-tab" data-bs-toggle="pill" data-bs-target="#pills-invierno" type="button" role="tab" aria-controls="pills-invierno" aria-selected="false">Invierno</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link botoncito" id="pills-primavera-tab" data-bs-toggle="pill" data-bs-target="#pills-primavera" type="button" role="tab" aria-controls="pills-primavera" aria-selected="false">Primavera</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link botoncito" id="pills-otoño-tab" data-bs-toggle="pill" data-bs-target="#pills-otoño" type="button" role="tab" aria-controls="pills-otoño" aria-selected="false" >Otoño</button>
                </li>
            </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-verano" role="tabpanel" aria-labelledby="pills-verano-tab" >
                        <div className="containerimg">
                            <div className="itemimg">
                                <img src="src\components\img\temporada\maiz.jpg"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Maiz</h3>
                            </div>

                            <div className="itemimg">
                                <img src="src\components\img\temporada\romero.jpeg"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Romero</h3>
                            </div>

                            <div className="itemimg">
                                <img src="src\components\img\temporada\berenjena.jpg"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Berenjena</h3>
                            </div>        
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-invierno" role="tabpanel" aria-labelledby="pills-invierno-tab" >
                        <div className="containerimg">
                            <div className="itemimg">
                                <img src="src\components\img\temporada\lechugareal.webp"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Lechuga</h3>
                            </div>

                            <div className="itemimg">
                                <img src="src\components\img\temporada\espinaca.webp"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Espinaca</h3>
                            </div>

                            <div className="itemimg">
                                <img src="src\components\img\temporada\cebolla.webp"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Cebolla</h3>
                            </div>        
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-primavera" role="tabpanel" aria-labelledby="pills-primavera-tab" >
                        <div className="containerimg">
                            <div className="itemimg">
                                <img src="src\components\img\temporada\fresas.webp"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Fresas</h3>
                            </div>

                            <div className="itemimg">
                                <img src="src\components\img\temporada\tomate.webp"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Tomate</h3>
                            </div>

                            <div className="itemimg">
                                <img src="src\components\img\temporada\pimientos.webp"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Pimientos</h3>
                            </div>        
                        </div>
                    </div>

                    <div className="tab-pane fade" id="pills-otoño" role="tabpanel" aria-labelledby="pills-otoño-tab" >
                        <div className="containerimg">
                            <div className="itemimg">
                                <img src="src\components\img\temporada\zanahoria.webp"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Zanahoria</h3>
                            </div>

                            <div className="itemimg">
                                <img src="src\components\img\temporada\remolacha.webp"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Remolacha</h3>
                            </div>

                            <div className="itemimg">
                                <img src="src\components\img\temporada\broccoli.jpg"></img>
                                <p className='parrafoTemp'>Lorem Ipsum simpl Lorem Ipsum</p>
                                <h3 className='description'>Brocoli</h3>
                            </div>        
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Temporadas;

