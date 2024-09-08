
import './singUp.css'; // Asegúrate de crear un archivo CSS con los estilos específicos


function SignUp() {
  return (
    <section className="h-100 gradient-form" style={{ backgroundImage: 'url(../img/cuadros-100.jpg)' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                {/* Right column: Info */}
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                    <h2  className="mb-4">We are more than just a company</h2>
                    <p  className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p  className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                {/* Left column: Form */}
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center mb-4">
                      <img src="src/components/img/icon.png" style={{ width: '185px' }} alt="logo" />
                    </div>
                    <form action="/signup" method="post">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="nombre">Nombre Completo</label>
                        <input type="text" id="nombre" className="form-control" name="nombre" placeholder="Victor Manuel" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="telefono">Teléfono</label>
                        <input type="text" id="telefono" className="form-control" name="telefono" placeholder="9785152252" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="direccion">Dirección</label>
                        <input type="text" id="direccion" className="form-control" name="direccion" placeholder="Cra 70 1 C 52" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="correo">Correo Electrónico</label>
                        <input type="email" id="correo" className="form-control" name="correo" placeholder="admin@outlook.com.co" />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="contrasena">Contraseña</label>
                        <input type="password" id="contrasena" className="form-control" name="contrasena" placeholder="*********************" />
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn-custom fa-lg mb-3" type="submit">Sign up</button>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <p className="mb-0 me-2">¿Ya estás registrado?</p>
                        <a href="/signup" className="btn btn-outline-custom">Crear nueva</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
