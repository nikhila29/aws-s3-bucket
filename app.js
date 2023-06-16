const express = require('express');
const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  accessKeyId: 'AKIA3BWIWRQDASG7UFM7',
  secretAccessKey: '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',
  region: 'Asia Pacific (Mumbai) ap-south-1	'
});

// Create an S3 instance
const s3 = new AWS.S3();
const cloudFrontDomain = 'https://d2ch258gtqn0d0.cloudfront.net';
const bucketName = 'nikhilas3bucket';
const imageFileName = 'my photo.jpg';

// Create an Express server
const app = express();

// Route to generate and log the signed URL
app.get('/signed-url', (req, res) => {
  const params = {
    Bucket: bucketName,
    Key: imageFileName,
    Expires: 3000 // Expiry time in seconds (5 minutes)
  };

  // Generate the signed URL
  const signedUrl = s3.getSignedUrl('getObject', params);

  // Log the signed URL on the console
  console.log('Signed URL:', signedUrl);

  res.send('Signed URL generated and logged on the console.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

