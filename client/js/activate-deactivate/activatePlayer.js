/* eslint-disable no-unused-vars */
// Activating the player according to the current turn
function activatePlayer (game) {
  const players = document.getElementById('root').children
  const currentPlayer = players[game.turn + 1]

  const cards = currentPlayer.querySelectorAll('.Card')
  cards.forEach((card) => {
    // Activating all Cards for current player
    card.style['pointer-events'] = 'auto'
  })

  // Activating the button for current player
  const button = currentPlayer.querySelectorAll('.buttons')[0]
  button.disabled = false

  // change name of player whose turn it currently is
  const currentPlayerName = currentPlayer.getElementsByTagName('h1')[0].textContent
  document.getElementsByTagName('h2')[1].innerHTML = 'Current Player: ' + currentPlayerName
  const playerList = document.getElementById('root').children
}
