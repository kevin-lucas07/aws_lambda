import React from "react";

function Home() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="text-center mb-4">Sistema médico de inscripción de pacientes</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card rounded">
            <div className="card-body">
              <h3 className="card-title">Pacientes</h3>
              <a href="/paciente" className="btn btn-primary">Administrar informacion</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card rounded">
            <div className="card-body">
              <h3 className="card-title">Citas</h3>
              <a href="/" className="btn btn-primary">Administrar informacion</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card rounded">
            <div className="card-body">
              <h3 className="card-title">Medicos</h3>
              <a href="/" className="btn btn-primary">Administrar informacion</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
