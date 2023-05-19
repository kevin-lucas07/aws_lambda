import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from 'axios'
import Layout from '../../components/Layout'
import Nav from '../section/partials/nav'
import Footer from '../section/partials/footer'



function PacienteList() {
    const [pacienteList, setPacienteList] = useState([])

    useEffect(() => {
        fetchPacienteList()
    }, [])

    const fetchPacienteList = () => {
        axios
            .get('/pacientes')
            .then(function (response) {
                const pacientes = response.data.body.pacientes;
                setPacienteList(pacientes);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: '¿Seguro de eliminar?',
            text: "No se podrá dar marcha atrás!",
            icon: 'warning',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`pacientes/${id}`)
                    .then(function (response) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Datos eliminados correctamente!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        fetchPacienteList()
                    })
                    .catch(function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'An Error Occured!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    });
            }
        })
    }
    return (
        <Layout>
            <Nav />
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Administrar Pacientes</h2>
                <div className="card">
                    <div className="card-header">
                        <Link
                            className="btn btn-outline-primary"
                            to="/paciente/create">Crear Nueva Paciente
                        </Link>
                    </div>
                    <div className="card-body">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Nombre</th>
                                    <th>Telefono</th>
                                    <th>Direccion</th>
                                    <th>Diagnostico</th>
                                    <th>Medico</th>
                                    <th>Tratamiento</th>
                                    <th width="240px">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pacienteList.map((paciente, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{paciente.fecha}</td>
                                            <td>{paciente.nombre}</td>
                                            <td>{paciente.telefono}</td>
                                            <td>{paciente.direccion}</td>
                                            <td>{paciente.diagnostico}</td>
                                            <td>{paciente.medico}</td>
                                            <td>{paciente.tratamiento}</td>
                                            <td>
                                                <Link
                                                    to={`/paciente/show/${paciente.id}`}
                                                    className="btn btn-outline-info mx-1">
                                                    Ver
                                                </Link>
                                                <Link
                                                    className="btn btn-outline-success mx-1"
                                                    to={`/paciente/edit/${paciente.id}`}>
                                                    Editar
                                                </Link>
                                                <button 
                                                    onClick={()=>handleDelete(paciente.id)}
                                                    className="btn btn-outline-danger mx-1">
                                                    Borrar
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>

    );

}

export default PacienteList;