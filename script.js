const GridContainer = document.querySelector(".GridContainer")
const resetButton = document.getElementById('resetButton');
let isDrawing = false;

function resetGrid() {
    const boxes = document.querySelectorAll('.Box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'pink'; 
    });
}

resetButton.addEventListener('click', resetGrid);

for (var row = 0; row < 16 ; row++) {
    
    let Row = document.createElement("div")
    Row.classList.add("Row")

    for (var col = 0; col < 16; col++)
    {
        let Box = document.createElement("div")
        Box.classList.add("Box")

        Box.addEventListener('click', () => {
            Box.style.backgroundColor = '#A53060';
        });

        Box.addEventListener('mouseover', () => {
            if (isDrawing) {
                Box.style.backgroundColor = '#A53060';
            }
        });

        Row.appendChild(Box)
    }
    GridContainer.appendChild(Row)
    
}

document.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDrawing = true;
});

document.addEventListener('mouseup', () => isDrawing = false);
