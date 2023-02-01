const highscoreTable = document.getElementById("highscores-table");
const clearHighscoreBtn = document.getElementById("clear-highscores");

clearHighscoreBtn.addEventListener('click', clearHighscores);

generateHighscoresTable();

function generateHighscoresTable() {
  let highscores = localStorage.getItem("scoreList");
  if (highscores) {
    addHighscoreTableRows(highscores);
  } 
}

function addHighscoreTableRows(highscores) {
  highscores = JSON.parse(highscores);

  highscores.forEach(function(scoreItem, index) {
    const rankCell = createRankCell(index + 1);
    const scoreCell = createScoreCell(scoreItem.score);
    const initialsCell = createInitialsCell(scoreItem.initials);
    const highscoreTableRow = createHighscoreTableRow(rankCell, scoreCell, initialsCell);
    highscoreTable.appendChild(highscoreTableRow);
  });
}

function createRankCell(rank) {
  const rankCell = document.createElement('td');
  rankCell.textContent = `#${rank}`;
  return rankCell;
}

function createScoreCell(score) {
  const scoreCell = document.createElement('td');
  scoreCell.textContent = score;
  return scoreCell;
}

function createInitialsCell(initials) {
  const initialsCell = document.createElement('td');
  initialsCell.textContent = initials;
  return initialsCell;
}

function createHighscoreTableRow(rankCell, scoreCell, initialsCell) {
  const tableRow = document.createElement('tr');
  tableRow.appendChild(rankCell);
  tableRow.appendChild(scoreCell);
  tableRow.appendChild(initialsCell);
  return tableRow;
}

function clearHighscores() {
  localStorage.setItem('scoreList', []);
  while (highscoreTable.children.length > 1) {
    highscoreTable.removeChild(highscoreTable.lastChild);
  }
}