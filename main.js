function createGame(player1, hour, player2) {
  return `
          <li>
              <img
                src="./assets/icon-${player1}.svg"
                alt="Bandeira da ${player1}"
              />
              <strong>${hour}</strong>
              <img
                src="./assets/icon-${player2}.svg"
                alt="Bandeira do ${player2}"
              />
            </li>
  `
}


function createCardFour(date, day, games) {
  return `
    <div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector('.cards').innerHTML =

  createCardFour("24/11", "quinta",
    createGame("brazil", "16:00", "serbia")
    //+ createGame("brazil", "16:00", "serbia") 
  ) +

  createCardFour("28/11", "segunda",
    createGame("brazil", "13:00", "switzerland")
  ) +

  createCardFour("02/12", "sexta",
    createGame("cameroon", "16:00", "brazil")
  )

