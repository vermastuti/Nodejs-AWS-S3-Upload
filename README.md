# Nodejs-AWS-S3-Upload

Before using this file, do the following:

1.) Open the folder (containing this file) in command prompt/terminal. Run this command: npm install aws-sdk
2.) Create .aws folder containing file named as credentials and enter values like following:
    
    [work-account] ; work-account profile
        aws_access_key_id = value
        aws_secret_access_key = value
        
    Use this link: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html    
    
3.) Update your region in this line of code: AWS.config.update({region: 'ap-south-1'});
4.) Enter your AWS S3 bucket name in this line of code:  Bucket: 'bucket-name',
4.) Run this command: node aws_api.js    
