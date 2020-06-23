function selectPortrait() {

let img = document.getElementById("portrait");
let nextPage = document.getElementById("continue");

img.src="../img/portraitOn.png";
nextPage.href="portrait.html"
nextPage.disabled = "false"

}


