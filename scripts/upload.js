
const button = document.getElementById('buttonid');

function updateDB (filename, caption) {
  $.getJSON('db/db.json', function (data) {
    const jsonBody = { id: data['images'].length + 1, src: 'http://localhost:9000/images/' + filename, caption: caption };
    $.ajax({
      url: 'http://localhost:3000/images',
      type: 'POST',
      data: JSON.stringify(jsonBody),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (data, textStatus, jqXHR) {
        console.log('success');
      }
    });
  });
}

const s3Client = new AWS.S3({
  endpoint: 'http://127.0.0.1:9000',
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  accessKeyId: 'D9C0O3KRRXB8CLPSLHNG',
  secretAccessKey: 'Iue9V1otkpo7RLlpp8xaKS0BStBtXcAUMhW95gIq'

});

console.log(button);

button.addEventListener('click', function () {
  file = document.getElementById('file').files[0];
  caption = document.getElementById('caption').value;
  // console.log(this.file.name);
  // console.log(caption);
  s3Client.putObject({
    Bucket: 'images',
    Key: file.name,
    Body: file,
    ContentLength: file.size,
    ContentType: file.type
  }, function (err, data) {
    console.log(err, data);
  });
  event.preventDefault();

  // console.log(document.getElementById('cation'));
  updateDB(file.name, caption);
});
