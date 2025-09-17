const cells = document.querySelectorAll('.cell');

function toggleActive(event) {
    const target = event.target;
    target.classList.toggle('active');
    target.removeEventListener('click', toggleActive);

}

cells.forEach(cell => {
  cell.addEventListener('click', toggleActive);


});

function createBoard() {
    console.log("Creating board...");
    const board = document.querySelector('.board');
    for (let i = 1;  i<numberOfCells+1; i++) {
    let cell = document.creatzeElement('div');
    cell.classList.add('cell');
    cell.innerText = i;
    board.appendChild(cell);
    
  }
}





// const cells = document.querySelectorAll('.cell');

// // cells.forEach(cell => {
// //   cell.addEventListener('click', (e) => {
// //     const target = e.target;
// //     cell.classList.toggle('active');
// //   });
// // });





body::before {
    content: "";
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    z-index: 9999;
    border-radius: 0;
    /* Gradiente radiale dal blu acceso ai bordi verso trasparente al centro */
    background: radial-gradient(circle, rgba(0, 102, 255, 0.5) 0%, rgba(0, 102, 255, 0.2) 40%, rgba(0, 102, 255, 0.05) 70%, transparent 100%);
}

.board {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

}

.cell {
    width: 100px;
    height: 100px;
    background-color: #4e4b4bff;
    border-radius: 100%;
    border: solid 2px #000;
    display: flex;
    text-align: center;
    justify-content: center;

}

.active {
    background-color: #deeb34ff;
    font-weight: bold;
    color: #000;
    cursor: pointer;

}




<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Progetto Cornice Sfocata</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Contenuto qui -->
</body>
</html>
<section class="board">