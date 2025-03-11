let boxes =document.querySelectorAll(".box");// for access the all boxes
let reset=document.querySelector("#reset-game");// for access the reset button
let newbtn=document.querySelector("#new-game");
let container=document.querySelector(".msg-container")
let msg =document.querySelector(".msg")
//for win pattern make 2d arrY
let turn0=0;

let winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((val) => {
    val.addEventListener("click",()=>{                                                                              
        console.log("button clicked");
        if(turn0){
            //player0
            val.innerText="0"
            turn0=false;
        }
        else{
            //playerx
            val.innerText="X";
            turn0=true;
        }
        val.disabled=true;
        checkWinner();
    });
    
});

const resetGame=()=>{
    turn0=true;
    enablebox();
    msg-container.classList.remove("hide");
}
const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation winner in ${winner}`;
    msg-container.classList.remove("hide");
    disablebox();
}
const checkWinner = () => {

    for (let pattern of winnerPattern) {
    
    let pos1 = boxes[pattern [0]].innerText;
    
    let pos2 = boxes[pattern[1]].innerText; 
    let pos3 = boxes[pattern [2]].innerText;
    
    if (pos1 != "" && pos2 != "" && pos3 != "") {
    
    if (pos1 ===pos2 && pos2 === pos3) {
    
    console.log("winner",pos1);
    showWinner(pos1);
    
    }
    
    }
    
    }
}
newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
