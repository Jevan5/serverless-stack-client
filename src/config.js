export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: 'pk_test_NlPLNZnpDECKqUqxkred4W2200vcGuTj4H',
    s3: {
        REGION: 'us-east-2',
        BUCKET: 'notes-file-attachment-uploads'
    },
    apiGateway: {
        REGION: 'us-east-2',
        URL: 'https://35wqap6qg3.execute-api.us-east-2.amazonaws.com/prod'
    },
    cognito: {
        REGION: 'us-east-2',
        USER_POOL_ID: 'us-east-2_BSDG7UbTp',
        APP_CLIENT_ID: '6c7pamb048d31rl8ustvkc5g12',
        IDENTITY_POOL_ID: 'us-east-2:2482289f-e286-4b51-95e1-0884d28cb093'
    }
};