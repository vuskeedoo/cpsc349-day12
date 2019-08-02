
$.ajax({
  url: 'http://localhost:3000/images',
  dataType: 'json',
  success: function (resp) {
    console.log(resp);
    for (let i = 0; i < resp.length; i++) {
      let list = document.getElementById('changeMe');
      let liTag = document.createElement('li');
      let imageTag = document.createElement('img');
      imageTag.src = resp[i].src;
      liTag.appendChild(imageTag);
      list.appendChild(liTag);
    }
  },
  error: function (req, status, err) {
    console.log('something went wrong', status, err);
  }
});

