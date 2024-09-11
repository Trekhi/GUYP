import './populares.css'

function Populares(){
    return(
        <div className='popcontainer'>
            <h1>Plantas más populares</h1>
            <p>l T. persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
            <div className="container text-center">
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-sm-12 itempop">
                        <div className="containerimgPop">
                            <img src="src\components\img\populares\chili.jpg" className="image"></img>
                            <div className="texto">Lorem ipsum, dolor sit amet  , ea, alias blanditiis numquam accusamus hic a reiciendis eligendi ipsa autem asperiores ullam molestiae animi amet iusto, eum debitis nobis cupiditate?</div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-between itempop">
                        <div className="containerimgPop">
                            <img src="src\components\img\populares\tomate.jpg" className="image"></img>
                            <div className="texto">Lorem adipisicing elit. Fugit, ea, alias blanditiis numquam accusamus hicnobis cupiditate?</div>
                        </div>

                        <div className="containerimgPop">
                            <img src="src\components\img\populares\ajo.jpg" className="image middle"></img>
                            <div className="texto">Lorem ipsum, autem asperiores ullam molestiae animi amet iusto, eum debitis nobis cupiditate?</div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 itempop">
                        <div className="containerimgPop">
                            <img src="src\components\img\populares\berenjena.jpg" className="image"></img>
                            <div className="texto">Lorem ipsum, dolor  elit. Fugit, ea, alias blanditiis numquam accusamus hic a reiciendis eligendi ipsa autem asperiores ullam molestiae animi amet iusto, eum debitis nobis cupiditate?</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Populares;