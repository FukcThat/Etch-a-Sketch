const GridContainer = document.querySelector(".GridContainer")

for (var row = 0; row < 16 ; row++) {
    
    let Row = document.createElement("div")
    Row.classList.add("Row")

    for (var col = 0; col < 16; col++)
    {
        let Box = document.createElement("div")
        Box.classList.add("Box")

        Row.appendChild(Box)
    }
    GridContainer.appendChild(Row)
    
}