"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    'headers':{
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Accept": '*/*',
      "Content-Type": 'application/json'
    },

    //console
    
    body: JSON.stringify(
      {
        message: "Bienvenido",
        input: event,
      },
      null,
      2
    ),
  };
};
