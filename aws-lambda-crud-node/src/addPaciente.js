const { v4 } = require('uuid');
const AWS = require('aws-sdk');


const addPaciente = async(event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    
    const {fecha, nombre, direccion, telefono, diagnostico, tratamiento, medico } = JSON.parse(event.body);
    const id = v4();

    const newPaciente = {
        id,
        fecha,
        nombre,
        direccion,
        telefono,
        diagnostico,
        tratamiento,
        medico,
    }

    await dynamodb.put({
        TableName: 'PacienteTable',
        Item: newPaciente
    }).promise();
    
    return {
        statusCode: 200,
        'headers': {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Accept": '*/*',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(newPaciente)
    }

}

module.exports = {
    addPaciente,
};