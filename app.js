let userscore = 0;
let compscore = 0;

let userwin;

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

const choice = document.querySelectorAll(".choices");
let msg = document.querySelector("#msg");

const gencompchoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawgame = () => {
    // console.log("It was a draw. Play again!");
    msg.innerText = "It was a draw. Play again!";
    msg.style.backgroundColor = "#90A583";
}

const showwinner = (compchoice, userchoice) => {
    if(userwin) {
        msg.innerText = `Congratulations! You win... ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;
    }else {
        msg.innerText = msg.innerText = `Oops! You lose...${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore;
    }
}

const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    // console.log("comp choice = ", compchoice);
    if(userchoice === compchoice) {
        drawgame();
    }else {
        userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "scissors") {
            userwin = compchoice === "rock" ? false : true;
        } else {
            userwin = compchoice === "scissors" ? false : true;
        }
        showwinner(compchoice, userchoice);
    }
}

choice.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userchoice = choices.getAttribute("id");
        playgame(userchoice);
    });
});