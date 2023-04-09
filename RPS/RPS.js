const hands = ['rock', 'paper', 'Scissors'];

function getHand() {
    let randomNumber = (parseInt(Math.random() * 10 % 3));
    let randomHand = hands[randomNumber]
    return randomHand
}

let player1 = {
    name: "P1",
    getHand: getHand()

    
}

let player2 = {
    name: "P2",
    getHand: getHand()
}

playRound(player1, player2)


function playRound(player1, player2) {
    let p1Count=0
    let p2Count=0
    
    while (p1Count < 3 && p2Count < 3) {
        let handP1 = player1.getHand();
        let handP2 = player2.getHand();

        if (handP1 === handP2){
            console.log("Player 1 throws", handP1,".", "Player 2 throws", handP2,".")
            console.log("Tie!");
            return null;
        } else if (
        (handP1 === "rock" && handP2 === "scissors") ||
        (handP1 === "paper" && handP2 === "rock") ||
        (handP1 === "scissors" && handP2 === "paper")
        )
           { console.log("Player 1 throws", handP1,".", "Player 2 throws", handP2,".")
            console.log(player1.name + "wins!");
        } else if (
            (handP2 === "rock" && handP1 === "scissors") ||
            (handP2 === "paper" && handP1 === "rock") ||
            (handP2 === "scissors" && handP1 === "paper")
            )
                console.log("Player 1 throws", handP1,".", "Player 2 throws", handP2,".")
                console.log(player2.name + "wins!");
      } 
}

