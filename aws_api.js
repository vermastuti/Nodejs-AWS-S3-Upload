//Load the SDK
var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');

// Set credentials and region
// This can also be done directly on the service client
AWS.config.update({region: 'ap-south-1'}); //, credentials: {YOUR_CREDENTIALS}});

//Loading Credentials in Node.js from the Shared Credentials File
var credentials = new AWS.SharedIniFileCredentials({profile:'work-account'});                                    
AWS.config.credentials = credentials;

//Working code to load credentials from specified path
//AWS.config.loadFromPath('./aws_config.json');

//Create an S3 service object
var s3 = new AWS.S3(); 

//params
var file = './aws_config.json';//'D:/stuti/STUTI_VERMA.pdf';

//assign values to params
var s3File = 'resumes/'+path.basename(file);
console.log(file,"\n",s3File);


// Read in the file, convert it to base64, store to S3
fs.readFile(file, function (err, data) {
    if (err) { throw err; }
   
    var base64data = new Buffer(data, 'binary');
   
    var s3 = new AWS.S3();
    s3.putObject({
      Bucket: 'bucket-name',
      Key: s3File,
      Body: base64data,
      ACL: 'public-read'
    },function (resp) {
      console.log(arguments);
      console.log('Successfully uploaded package.');
    });
   
});





