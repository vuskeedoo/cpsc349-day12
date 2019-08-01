
let json;

$.ajax({
  url: 'http://localhost:3000/images',
  dataType: 'json',
  success: function (resp) {
    json = resp[0];
    console.log(resp);
    let list = document.getElementById('changeMe');
    let liTag = document.createElement('li');
    let imageTag = document.createElement('img');
    imageTag.src = json.src;
    liTag.appendChild(imageTag);
    list.appendChild(liTag);
  },
  error: function (req, status, err) {
    console.log('something went wrong', status, err);
  }
});

