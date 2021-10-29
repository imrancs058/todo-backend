// ./pact/provider_tests.js
const { Verifier } = require('@pact-foundation/pact');

let opts = {
    providerBaseUrl: 'http://localhost:3322',
    pactBrokerUrl: 'https://mercurysols.pactflow.io/',
    pactBrokerToken: 'l-Z1kAJZefQBf45sn9ywGQ',
    provider: 'todo-provider',
    publishVerificationResult: true,
    providerVersion: '1.0.0',
    providerStatesSetupUrl: 'http://localhost:3322/provider-state'
};

new Verifier().verifyProvider(opts).then(function () {
    console.log("Pacts successfully verified!");
});
