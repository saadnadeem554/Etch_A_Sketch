const container = document.querySelector(".container");
let squareInRow = 16;
let isDrawing = false; // Flag to track drawing state

console.log(squareInRow);

function grid(squareInRow) {
    for (let i = 0; i < squareInRow; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < squareInRow; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
            square.addEventListener("mouseenter", () => {
                if (isDrawing) {
                    square.style.backgroundColor = 'black';
                }
            });
        }
    }
}

grid(squareInRow);

function createNewGrid(squares) {
    container.innerHTML = ""; // Clears previous grid
    grid(squares);
}

const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", () => {
    const squarePerSide = () => {
        let dimension = +prompt("Enter the number of squares per side for New Grid(max=100)", 16);
        if (dimension > 100 || dimension < 1 || isNaN(dimension)) {
            alert("Please enter valid input within range");
            dimension = 16;
        }
        return dimension;
    };
    squareInRow = squarePerSide();
    createNewGrid(squareInRow);
});

const clearGrid = document.querySelector(".reset");
clearGrid.addEventListener("click", () => {
    createNewGrid(squareInRow);
});

const showBorder = document.querySelector(".border");
showBorder.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.border = "1px solid black";
    });
});

// Toggle drawing on and off when a square is clicked
container.addEventListener("click", () => {
    isDrawing = !isDrawing;
});
