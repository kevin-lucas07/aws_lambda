import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import Layout from '../../components/Layout'


function PacienteCreate() {
    const [nombre, setNombre] = useState('');
    // const [diagnostico, setDiagnostico] = useState('')
    const [telefono, setTelefono] = useState('')
    // const [fecha, setFecha] = useState('')
    const [direccion, setDireccion] = useState('')
    const [isSaving, setIsSaving] = useState(false)

    const navigate = useNavigate();

    const handleSave = () => {
        setIsSaving(true);
        axios.post('pacientes/', {
            nombre: nombre,
            // diagnostico: diagnostico,
            telefono: telefono,
            // fecha: fecha,
            direccion: direccion,
            
        })
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Datos Guardados Correctamente!',
                    showConfirmButton: false,
                    timer: 1500,
                })
                setIsSaving(false);
                setNombre('')
                // setDiagnostico('')
                setTelefono('')
                // setFecha('')
                setDireccion('')

                // Redireccionar a Lista
                navigate('/paciente');
                
            })
            .catch(function (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un Error!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false)
                console.log(error);
            });
    }

    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Crear Paciente</h2>
                <div className="card">
                    <div className="card-header">
                        <Link
                            className="btn btn-outline-danger float-right"
                            to="/paciente">Cancelar
                        </Link>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombres y Apellidos</label>
                                <input
                                    onChange={(event) => { setNombre(event.target.value) }}
                                    value={nombre}
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre" />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="diagnostico">Diagnostico</label>
                                <input
                                    onChange={(event) => { setDiagnostico(event.target.value) }}
                                    value={diagnostico}
                                    type="text"
                                    className="form-control"
                                    id="diagnostico"
                                    name="diagnostico" />
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="telefono">Telefono</label>
                                <input
                                    onChange={(event) => { setTelefono(event.target.value) }}
                                    value={telefono}
                                    type="text"
                                    className="form-control"
                                    id="telefono"
                                    name="telefono" />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="fecha">Fecha</label>
                                <input
                                    onChange={(event) => { setFecha(event.target.value) }}
                                    value={fecha}
                                    type="date"
                                    className="form-control"
                                    id="fecha"
                                    name="fecha" />
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="direccion">Direccion</label>
                                <input
                                    onChange={(event) => { setDireccion(event.target.value) }}
                                    value={direccion}
                                    type="text"
                                    className="form-control"
                                    id="direccion"
                                    name="direccion" />
                            </div>
                            <button
                                disabled={isSaving}
                                onClick={handleSave}
                                type="button"
                                className="btn btn-outline-primary mt-3">
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PacienteCreate;