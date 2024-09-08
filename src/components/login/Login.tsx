import React from 'react';
import './login.css'; // Asegúrate de crear un archivo CSS con los estilos específicos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Login() {
  return (
    <section className="gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                {/* Left column: Form */}
                <div className="col-md-12 col-lg-12 col-xl-12">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center mb-4">
                      <img src="src/components/img/icon.png" style={{ width: '150px' }} alt="logo" />
                    </div>
                    <form action="/log" method="post">
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="correo" className="form-control" placeholder="Ingrese el correo electrónico" required />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" className="form-control" placeholder="Ingrese la contraseña" required />
                      </div>
                      <div className="text-center pb-1">
                        <button className="btn-custom fa-lg mb-3" type="submit">Iniciar sesión</button>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">¿No tienes una cuenta?</p>
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

export default Login;
