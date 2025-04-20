function updateTime() {
  //Dortmund
  let dortmundElement = document.querySelector("#dortmund");
  let dortmundDateElement = dortmundElement.querySelector(".date");
  let dortmundTimeElement = dortmundElement.querySelector(".time");
  let dortmundTime = moment().tz("Europe/Berlin");

  dortmundDateElement.innerHTML = dortmundTime.format("MMMM Do YYYY");
  dortmundTimeElement.innerHTML = dortmundTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
