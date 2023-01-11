const axios = require("axios");
const { isEmpty, isNil } = require("lodash");

exports.handler = async (event) => {
    const number = event.queryStringParameters.number || 1
    try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${number}`      
        );
        if(isEmpty(response.data) || isNil(response.data)) return { statusCode: 204, message: 'No content'}
        return {
            statusCode: 200,
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        console.log(error);
    }
    
};


