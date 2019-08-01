
let button = document.forms['input', 'submit'];

$.getScript("https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/", function () {
    let s3Client = new AW
    S.S3({
        endpoint: 'localhost:9000',
        s3ForcePathStyle: true,
        signatureVersion: 'v4',
        accessKeyId: 'D9C0O3KRRXB8CLPSLHNG',
        secretAccessKey: 'Iue9V1otkpo7RLlpp8xaKS0BStBtXcAUMhW95gIq'
        
    });
    
    console.log(button);
});







button.addEventListener('click', function (event) {
    s3Client.putObject({
        Bucket: 'images',
        Key: file.name,
        Body: file,
        ContentLength: file.size,
        ContentType: file.type
    }, function (err, data) {
        console.log(err, data);
    });
});
