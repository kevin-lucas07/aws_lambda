const AWS = require('aws-sdk');

const deletePaciente = async event => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb.delete({
        TableName: 'PacienteTable',
        Key: {
            id
        }
    }).promise();

    return {
        status: 200,
        'headers': {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Accept": '*/*',
            "Content-Type": 'application/json'
        },
        body: {
            message: 'Paciente eliminado',
        },
    };
}

module.exports = {
    deletePaciente
};