import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Layout from '../../components/Layout'


function CitaShow() {
    const [id] = useState(useParams().id)
    const [cita, setCita] = useState({ fecha_cita: '', medico: '', especialidad: '' })

    useEffect(() => {
        axios.get(`v1/api/cita/${id}`)
            .then(function (response) {
                setCita(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id])

    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Detalles de Cita</h2>
                <div className="card">
                    <div className="card-header">
                        <Link
                            className="btn btn-outline-info float-right"
                            to="/cita"> Volver
                        </Link>
                    </div>
                    <div className="card-body">
                        <b className="text-muted">ID:</b>
                        <p>{cita._id}</p>
                        <b className="text-muted">Fecha:</b>
                        <p>{cita.fecha_cita}</p>
                        <b className="text-muted">Medico:</b>
                        <p>{cita.medico}</p>
                        <b className="text-muted">Especialidad:</b>
                        <p>{cita.especialidad}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CitaShow;