var descriptionApi = " http://localhost:3000/description";
var pictureApi = "http://localhost:3000/picture";

fetch(descriptionApi)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    let shows = data.map(function (describe) {
      return `<h1>${describe.name} <span style="color: rgba(74, 157, 82, 1)">${describe.character}</span></h1>
      <h1>Sống tại ${describe.Address}</h1>
      <h1>Sở thích: ${describe.Hoobies}</h1>
      <h1>Sinh năm: ${describe.Yearofbirth}</h1>`;
    });

    var show = shows.join("");

    document.querySelector(".depend-inf-1").innerHTML = show;
  })
  .catch(function (err) {
    console.log(err);
    alert("Không lấy được dữ liệu");
  });

fetch(pictureApi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let showimgs = data.map(function (img) {
      return `<div><img src="${img.image}" alt="" style="width: 100%; height: 495px"></img></div>`;
    });

    let showimg = showimgs.join("");

    document.querySelector(".inf-2").addEventListener("click", function () {
      let targetElement = document.querySelector(".depend-inf-2");

      targetElement.innerHTML = showimg;
    });
  })
  .catch(function (error) {
    console.log("Có lỗi xảy ra:", error);
  });

function change_selection_img(event) {
  event.preventDefault();

  let avartar = document.querySelector(".inf-2");
  avartar.style.borderBottom = "5px solid #286DF2";
  document.querySelector(".inf-2 a").style.color = "#286DF2";

  let introduce = document.querySelector(".inf-1");
  introduce.style.borderBottom = "0";
  document.querySelector(".inf-1 a").style.color = "rgba(0, 0, 0, 1)";

  document.querySelector(".depend-inf-1").style.display = "none";
  document.querySelector(".depend-inf-2").style.display = "grid";
}

function change_selection_introduce(event) {
  event.preventDefault();

  let introduction = document.querySelector(".inf-1");
  introduction.style.borderBottom = "5px solid #286DF2";
  document.querySelector(".inf-1 a").style.color = "#286DF2";

  let avartar = document.querySelector(".inf-2");
  avartar.style.borderBottom = "0";
  document.querySelector(".inf-2 a").style.color = "rgba(0, 0, 0, 1)";

  document.querySelector(".depend-inf-2").style.display = "none";
  document.querySelector(".depend-inf-1").style.display = "block";
}

var image_click = document.querySelector(".inf-2");
image_click.addEventListener("click", change_selection_img);

let introduce_click = document.querySelector(".inf-1");
introduce_click.addEventListener("click", change_selection_introduce);
