const GridContainer = document.querySelector(".GridContainer");
const colorPicker = document.getElementById('colorPicker');
const resetButton = document.getElementById('resetButton');
let isDrawing = false;
let currentColor = '#A53060';

colorPicker.addEventListener('change', (e) => {
    currentColor = e.target.value;
});

function resetGrid() {
    const boxes = document.querySelectorAll('.Box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'pink'; 
    });
}

function changeBoxColor(box) {
    //box.style.backgroundColor = currentColor;
    box.dataset.color = currentColor;
}

resetButton.addEventListener('click', resetGrid);

for (var row = 0; row < 16 ; row++) {
    
    let Row = document.createElement("div")
    Row.classList.add("Row")

    for (var col = 0; col < 16; col++)
    {
        let Box = document.createElement("div")
        Box.classList.add("Box")
        Box.dataset.color = "pink";

        console.log(Box);

        Box.addEventListener('click', () => changeBoxColor(Box));
            Box.addEventListener('mouseover', () => {
                if (isDrawing) {
                    changeBoxColor(Box);
                }
                Box.style.backgroundColor = currentColor;

            });
        Box.addEventListener("mouseleave", () => {
            Box.style.backgroundColor = Box.dataset.color
        })

        Row.appendChild(Box)
    }
    GridContainer.appendChild(Row)
    
}

document.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDrawing = true;
});

document.addEventListener('mouseup', () => isDrawing = false);
