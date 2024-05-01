function startGame() {
  const numPlayers = parseInt(document.getElementById("numPlayers").value);
  if (numPlayers < 1 || numPlayers > 4 || isNaN(numPlayers)) {
    alert("Por favor, insira um número válido de jogadores (1-4).");
  } else {
    sessionStorage.setItem("numPlayers", numPlayers);
    window.location.href = "game.html";
  }
}
