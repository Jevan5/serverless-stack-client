const dev = {
    s3: {
        REGION: 'us-east-2',
        BUCKET: 'notes-app-2-api-dev-attachmentsbucket-1sk8hn14eq9e2'
    },
    apiGateway: {
        REGION: 'us-east-2',
        URL: 'https://ff86rclaaf.execute-api.us-east-2.amazonaws.com/dev'
    },
    cognito: {
        REGION: 'us-east-2',
        USER_POOL_ID: 'us-east-2_s2njriNUh',
        APP_CLIENT_ID: '6s45au8u6dlm3iqi1uk8fc398',
        IDENTITY_POOL_ID: 'us-east-2:a970a64d-8f30-480c-9e19-9dc91896459e'
    }
};

const prod = {
    s3: {
        REGION: 'us-east-2',
        BUCKET: 'notes-app-2-api-prod-attachmentsbucket-aezuaz9bxsqv'
    },
    apiGateway: {
        REGION: 'us-east-2',
        URL: 'https://9y2b4gku56.execute-api.us-east-2.amazonaws.com/prod'
    },
    cognito: {
        REGION: 'us-east-2',
        USER_POOL_ID: 'us-east-2_Qr4Clg2D2',
        APP_CLIENT_ID: '16kef3kbaq37862ek7kv95tvbb',
        IDENTITY_POOL_ID: 'us-east-2:f37c0ef5-fea2-4d45-afca-70eeb254216c'
    }
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: 'pk_test_NlPLNZnpDECKqUqxkred4W2200vcGuTj4H',
    ...config
}