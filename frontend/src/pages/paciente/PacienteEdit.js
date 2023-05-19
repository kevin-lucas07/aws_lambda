import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import Layout from '../../components/Layout';

function PacienteEdit() {
    const [id] = useState(useParams().id);

    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [tratamiento, setTratamiento] = useState('');
    const [medico, setMedico] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`pacientes/${id}`)
            .then(function (response) {
                let paciente = response.data.body;



                setNombre(paciente.nombre);
                setDireccion(paciente.direccion);
                setTelefono(paciente.telefono);
                setDiagnostico(paciente.diagnostico);
                setTratamiento(paciente.tratamiento);
                setMedico(paciente.medico);
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occured!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    }, [id]);

    const handleSave = () => {
        setIsSaving(true);
        const data = {
            pacientes: [
                {
                    nombre: "nombre",
                    direccion: "direccion",
                    telefono: "telefono",
                    diagnostico: "diagnostico",
                    tratamiento: "tratamiento",
                    medico: "medico",
                }
            ]
        };

        axios
            .put(`pacientes/${id}`, data)
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Datos actualizados correctamente!',
                    showConfirmButton: false,
                    timer: 1500,
                }).then(console.log(response));
                setIsSaving(false);

                // Redireccionar a Lista
                navigate('/paciente');
                console.log(" put: " + response.data.body);
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'An Error Occured!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                setIsSaving(false);
            });

    };

    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Editar Paciente</h2>
                <div className="card">
                    <div className="card-header">
                        <Link className="btn btn-outline-danger float-right" to="/paciente">
                            Cancelar
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    onChange={(event) => {
                                        setNombre(event.target.value);
                                    }}
                                    value={nombre}
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="direccion">Dirección</label>
                                <input
                                    onChange={(event) => {
                                        setDireccion(event.target.value);
                                    }}
                                    value={direccion}
                                    type="text"
                                    className="form-control"
                                    id="direccion"
                                    name="direccion"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    onChange={(event) => {
                                        setTelefono(event.target.value);
                                    }}
                                    value={telefono}
                                    type="text"
                                    className="form-control"
                                    id="telefono"
                                    name="telefono"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="diagnostico">Diagnóstico</label>
                                <input
                                    onChange={(event) => {
                                        setDiagnostico(event.target.value);
                                    }}
                                    value={diagnostico}
                                    type="text"
                                    className="form-control"
                                    id="diagnostico"
                                    name="diagnostico"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tratamiento">Tratamiento</label>
                                <input
                                    onChange={(event) => {
                                        setTratamiento(event.target.value);
                                    }}
                                    value={tratamiento}
                                    type="text"
                                    className="form-control"
                                    id="tratamiento"
                                    name="tratamiento"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="medico">Medico</label>
                                <input
                                    onChange={(event) => {
                                        setMedico(event.target.value);
                                    }}
                                    value={medico}
                                    type="text"
                                    className="form-control"
                                    id="medico"
                                    name="medico"
                                />
                            </div>
                            <button
                                disabled={isSaving}
                                onClick={handleSave}
                                type="button"
                                className="btn btn-outline-primary mt-3"
                            >
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PacienteEdit;