const AWS = require('aws-sdk');9

const getPaciente = async (event) => {
    
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters;

    const result = await dynamodb.get({
        TableName: 'PacienteTable',
        Key: {
            id
        }
    }).promise();

    const paciente = result.Item

    return {
        status: 200,
        'headers': {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
        },
        body: paciente,
    }
}

module.exports = {
    getPaciente
}