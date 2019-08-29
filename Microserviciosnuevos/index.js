const soapRequest = require('easy-soap-request');
const url = 'http://localhost:8082/ode/processes/HelloWorld.HelloWorldProcessPort/';
const headers = {
    'Content-Type': 'text/xml;charset=UTF-8',
    'soapAction': 'http://helloWorld/process/HelloWorldRequest',
};
// example data
const xml = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hel="http://helloWorld">
   <soapenv:Header/>
   <soapenv:Body>
      <hel:HelloWorldRequest>
         <hel:input>?Putos Todos</hel:input>
      </hel:HelloWorldRequest>
   </soapenv:Body>
</soapenv:Envelope>
`;


// usage of module
soapRequest(url, headers, xml).then(({response: {body, statusCode}}) => {
    console.log(body);
    console.log(statusCode);
}).catch((errorBody) => {
    console.error(errorBody);
});