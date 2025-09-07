let boxes=document.querySelectorAll(".box"); 
let reset_btn=document.querySelector("#reset");
let new_btn=document.querySelector("#new-btn");
let msgctn=document.querySelector(".msg");
let vmsg=document.querySelector("#message");

let turn_O= true;

const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const reset_game=()=>{
    turn_O=true;
    enableboxes();
    msgctn.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn_O===true){
            box.innerText="O";
            turn_O=false;
        }
        else{
            box.innerText="X";
            turn_O=true;
        }
       box.disabled=true;
       check_win();
    })
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const show_winner=(winner)=>{
    mesage.innerText=`Congratulations, Winner is ${winner}`;
    msgctn.classList.remove("hide");
    disableboxes();

};
let check_win=()=>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2!= "" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner",pos1);
                show_winner(pos1);
            }
        }
    }
};
new_btn.addEventListener("click",reset_game);
reset_btn.addEventListener("click",reset_game);