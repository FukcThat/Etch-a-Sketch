const GridContainer = document.querySelector(".GridContainer");
const colorPicker = document.getElementById("colorPicker");
const resetButton = document.getElementById("resetButton");
let isDrawing = false;
let currentColor = "#1f1d1d";

colorPicker.addEventListener("change", (e) => {
  currentColor = e.target.value;
});

function resetGrid() {
  const boxes = document.querySelectorAll(".Box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "#e6d9d9";
  });
}

function changeBoxColor(box) {
  //box.style.backgroundColor = currentColor;
  box.dataset.color = currentColor;
}

resetButton.addEventListener("click", resetGrid);

function CreateGrid(num) {
  const boxes = document.querySelectorAll(".Box");

  boxes.forEach((box) => {
    box.remove();
  });

  const rows = document.querySelectorAll(".Row");
  rows.forEach((row) => {
    row.remove();
  });

  for (var row = 0; row < num; row++) {
    let Row = document.createElement("div");
    Row.classList.add("Row");
    Row.style.height = (500 / num).toString() + "px";

    for (var col = 0; col < num; col++) {
      let Box = document.createElement("div");
      Box.classList.add("Box");
      Box.dataset.color = "#e6d9d9";
      Box.style.height = (500 / num).toString() + "px";
      Box.style.width = (500 / num).toString() + "px";

      Box.addEventListener("click", () => changeBoxColor(Box));
      Box.addEventListener("mouseover", () => {
        if (isDrawing) {
          changeBoxColor(Box);
        }
        Box.style.backgroundColor = currentColor;
      });
      Box.addEventListener("mouseleave", () => {
        Box.style.backgroundColor = Box.dataset.color;
      });

      Row.appendChild(Box);
    }
    GridContainer.appendChild(Row);
  }
}

CreateGrid(16);

document.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDrawing = true;
});

document.addEventListener("mouseup", () => (isDrawing = false));

function resizeCanvas() {
  let popUp = prompt("How many squares would you like on each side?");
  let num = parseInt(popUp);

  while (num >= 100) {
    let Error = prompt("Please select a number smaller than 100");
    num = parseInt(Error);
  }

  console.log(num);
  CreateGrid(num);
}

changeCanvasSize.addEventListener("click", resizeCanvas);
