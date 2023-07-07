var personalApi = " http://localhost:3000/personal";
fetch(personalApi)
  .then(function (response) {
    return response.json();
  })

  .then(function (imgs) {
    console.log(imgs);
    var htmls = imgs.map(function (img) {
      return `<img  src="${img.img_avatar}" alt="" style="width: 50px; height: 50px; border-radius: 50%">`;
    });

    var img_background = imgs.map(function (img_2) {
      return `
      <img class="img-1" src="${img_2.img_background}" alt="" style="width: 1200px; height: 479px; border-radius: 20px; object-fit: cover">
      <img class="img-2" src="${img_2.img_avatar}" alt="" style="width: 190px; height: 190px; border-radius: 50%; object-fit: cover">
      `;
    });

    var html = htmls.join("");
    var image = img_background.join(";");
    document.querySelector(".avt-small").innerHTML = html;
    document.querySelector(".image").innerHTML = image;
  })

  .catch(function (err) {
    console.log(err);
    alert("Không nhận được dữ liệu");
  });
