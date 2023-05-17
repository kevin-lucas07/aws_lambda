const AWS = require('aws-sdk');

const getPacientes = async (event) => {

    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const result = await dynamodb.scan({
            TableName: 'PacienteTable',
        }).promise();

        const pacientes = result.Items;

        console.log(pacientes);

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
                pacientes
            }
        };
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getPacientes,
};