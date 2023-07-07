var personalApi = " http://localhost:3000/personal";
fetch(personalApi)
  .then(function (response) {
    return response.json();
  })

  .then(function (imgs) {
    var htmls = imgs.map(function (img) {
      return `<img src="${img.img_avatar}" alt="" style="width: 50px; height: 50px; border-radius: 50%">`;
    });

    var html = htmls.join("");
    document.querySelector(".avt-small").innerHTML = html;
  })

  .catch(function (err) {
    console.log(err);
    alert("Không nhận được dữ liệu");
  });
