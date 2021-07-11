// Music
const music = document.getElementById("music");
const tombol = document.getElementById("tombol");
const imgTombol = document.getElementById("img-tombol");
tombol.addEventListener("click", function () {
  pauseMusic();
});
function pauseMusic() {
  if (music.paused) {
    music.play();
    imgTombol.classList.remove("fa-play");
    imgTombol.classList.add("fa-pause");
  } else {
    music.pause();
    imgTombol.classList.remove("fa-pause");
    imgTombol.classList.add("fa-play");
  }
}
// tombol
const open = document.getElementById("open");
const hidden = document.querySelectorAll(".web");
// console.log(open);
// console.log(hidden);
function scrollKeAwal() {
  awal.scrollIntoView({ behavior: "smooth" });
}
open.addEventListener("click", function () {
  hidden.forEach(function (element) {
    element.classList.remove("hidden");
  });
  function scrollKeAwal() {
    document.getElementById("awal").scrollIntoView({ behavior: "smooth" });
  }
  scrollKeAwal();
});
