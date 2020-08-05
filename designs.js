const pixelCanvas = document.getElementById("pixelCanvas");
const form = document.getElementById("sizePicker");
const rowsNumber = document.getElementById("inputHeight");
const cellsNumber = document.getElementById("inputWidth");
const colorPicker = document.getElementById("colorPicker");
const h1 = document.querySelectorAll("h1");

form.addEventListener("submit", function (e) {
  console.log(e.target);
  pixelCanvas.innerHTML = "";
  e.preventDefault();
  makeGrid();
});

pixelCanvas.addEventListener("click", function (e) {
  if (e.target.nodeName === "TD") {
    e.target.style.backgroundColor = colorPicker.value;
  }
});

function makeGrid() {
  if (rowsNumber.value <= 100 && cellsNumber.value <= 100) {
    for (let i = 0; i < rowsNumber.value; i++) {
      let row = pixelCanvas.insertRow(0);
      for (let a = 0; a < cellsNumber.value; a++) {
        row.insertCell(0);
      }
    }
    const h6 = document.querySelector(".h6");
    h6.style.display = "none";
  } else {
    let html = `<h6 class="h6">insert less than 100</h6>`;
    form.insertAdjacentHTML("afterbegin", html);
  }
}
