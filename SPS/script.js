let userscore=0;
let compscore=0;

const image= document.querySelectorAll(".imgsrc");
const msg= document.querySelector("#msg");
const userScore= document.querySelector("#user-score");
const compScore= document.querySelector("#comp-score");

const getcompChoice=()=>{
    const arr=["Stone","Paper","Scissor"];
    const comp=Math.floor(Math.random() *3);
    return arr[comp];

    
};

const drawGame=()=>{
    console.log("Draw Game");
    msg.innerText="Draw Game";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin)=>{
    if(userWin){
        userscore++;
        userScore.innerText=userscore;
        console.log("You Win :)");
        msg.innerText="You Win :)";
        msg.style.backgroundColor="green";
    }
        else{
            compscore++;
            compScore.innerText=compscore;
            console.log("You Lose :(");
            msg.innerText="You Lose :(";
            msg.style.backgroundColor="red";            
        }   
    };


const playGame=(userChoice)=>{
    console.log("userChoice=", userChoice);
    const compChoice=getcompChoice();
    console.log("Computer Choice=",compChoice);
    
    if(userChoice === compChoice){
        drawGame();  
    }
    else{
        let userWin=true;
        if(userChoice==="Stone"){
            //scissor,paper
            userWin=compChoice==="Paper"? false : true;
        }
        else if(userChoice==="Paper"){
            //Stone,Scissor
            userWin=compChoice==="Scissor"? false : true;
        }
        else{
            //Stone, Paper
            userWin=compChoice==="Stone"? false: true;
        }
        showWinner(userWin);
    }
};



image.forEach((e)=>{
    
    e.addEventListener("click",()=>{
        const userChoice=e.getAttribute("id");
        playGame(userChoice);
    })
});