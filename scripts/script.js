const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");

let idx = 0;

function atualizarCarrossel() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 1000}px)`;

  if (matchMedia("(max-width: 342px)").matches) {
    imgs.style.transform = `translateX(${-idx * 300}px)`;
  } else if (matchMedia("(max-width: 500px)").matches) {
    imgs.style.transform = `translateX(${-idx * 320}px)`;
  }
}

setInterval(atualizarCarrossel, 5000);
