// const AWS = require('aws-sdk');

// const updatePaciente = async (event) => {

//     const dynamodb = new AWS.DynamoDB.DocumentClient();
//     const { id } = event.pathParameters;

//     const {SET #fecha, #nombre, direccion, telefono, diagnostico, tratamiento, medico } = JSON.parse(event.body);

//     await dynamodb.update({
//         TableName: "PacienteTable",
//         Key: { id },
//         UpdateExpression: "fecha = :fecha, nombre = :nombre, direccion = :direccion, telefono = :telefono, diagnostico = :diagnostico, tratamiento = :tratamiento, medico = :medico",
//         ExpressionAttributeValues: {
//             ":fecha": fecha,
//             ":nombre": nombre,
//             ":direccion": direccion,
//             ":telefono": telefono,
//             ":diagnostico": diagnostico,
//             ":tratamiento": tratamiento,
//             ":medico": medico,
//         },
//         ReturnValues: "ALL_NEW",
//     }).promise()

//     return {
//         status: 200,
//         'headers': {
//             "Access-Control-Allow-Headers": "*",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "*",
//             "Accept": '*/*',
//             "Content-Type": 'application/json'
//         },
//         body: JSON.stringify({
//             message: 'Paciente actualizado correctamente'
//         }),
//     };
// }

// module.exports = {
//     updatePaciente,
// };


const AWS = require('aws-sdk');

const updatePaciente = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const { fecha, nombre, direccion, telefono, diagnostico, tratamiento, medico } = JSON.parse(event.body);

    await dynamodb.update({
        TableName: "PacienteTable",
        Key: { id },
        UpdateExpression: "SET #fecha = :fecha, #nombre = :nombre, #direccion = :direccion, #telefono = :telefono, #diagnostico = :diagnostico, #tratamiento = :tratamiento, #medico = :medico",
        ExpressionAttributeNames: {
            "#fecha": "fecha",
            "#nombre": "nombre",
            "#direccion": "direccion",
            "#telefono": "telefono",
            "#diagnostico": "diagnostico",
            "#tratamiento": "tratamiento",
            "#medico": "medico",
        },
        ExpressionAttributeValues: {
            ":fecha": fecha,
            ":nombre": nombre,
            ":direccion": direccion,
            ":telefono": telefono,
            ":diagnostico": diagnostico,
            ":tratamiento": tratamiento,
            ":medico": medico,
        },
        ReturnValues: "ALL_NEW",
    }).promise();

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Accept": "*/*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: 'Paciente actualizado correctamente'
        }),
    };
};

module.exports = {
    updatePaciente,
};
