/**
 * API Config
 *
 * */

export default {
    
    // Api have CORS problrm, Access-Control-Allow-Headers 
    hostname: 'https://cors-anywhere.herokuapp.com/https://swapi.dev',
    
    endpoints: [
        { key: 'people'         , url: '/api/people'    , method: 'GET'     }
    ],

};
