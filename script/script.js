var cssSheet = document.getElementsByTagName("link")[0];

var changeButton = document.getElementById("theme-button");
var buttonBall = document.getElementById("button-ball");
var nameMode = document.getElementById("name-mode");

var tema = localStorage.getItem("theme") || "Dark";

function initCss() {
  if (tema === "Dark") cssSheet.href = "./styles/dark_theme.css";
  else cssSheet.href = "./styles/light_theme.css";
}

changeButton.addEventListener("click", function () {
  if (tema === "Dark") {
    localStorage.setItem("theme", "Light");
    cssSheet.href = "./styles/light_theme.css";
    nameMode.textContent = "Light Mode";
    tema = "Light";
    buttonBall.style.left = "18px";
  } else {
    localStorage.setItem("theme", "Dark");
    cssSheet.href = "./styles/dark_theme.css";
    nameMode.textContent = "Dark Mode";
    tema = "Dark";
    buttonBall.style.left = "0px";
  }
});

initCss();
