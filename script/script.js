console.log("WELCOME TO THE TIC TAC TOE GAME")
const turn = new Audio("others/turn.wav")
const win =new Audio("others/win.wav")
const boxes=document.getElementsByClassName("box")
const turntext=document.getElementsByClassName("ll")
const gamecont=document.getElementsByClassName("gamecont");


turntext.innerText="Turn Of X"

let intext="X";

//change the turn
const changeturn= ()=>{
   
    return intext === "X"? "O": "X"
}
//win
const checkwin=()=>{
    boxt=document.getElementsByClassName('boxinner');
    


let wins=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

wins.forEach(e=>{
    if(boxt[e[0]].innerText===boxt[e[1]].innerText && boxt[e[1]].innerText===boxt[e[2]].innerText && boxt[e[0]].innerText!==""){
        win.play();
document.getElementsByClassName("head")[0].innerText=boxt[e[0]].innerText + " WON";
     document.getElementsByClassName('popper')[0].style.display="block";
     document.getElementsByClassName('popper')[1].style.display="block";

document.getElementById('party').style.display="block";
}


})
}
//GameLOgic
Array.from(boxes).forEach(element => {
    let boxt=element.querySelector('.boxinner');

    element.addEventListener('click',()=>{
        if(boxt.innerText===""){
         let t=intext
            boxt.innerText=t;
            t = changeturn();
            intext=t
        
            turn.play();
            checkwin();
        }
    })
});
//reset
press=document.querySelector(".btn")
press.addEventListener('click',()=>{
    turn.play()
    Array.from(boxes).forEach(e=>{
    boxt=e.querySelector('.boxinner')
    boxt.innerText=""
    })
    document.getElementsByClassName("head")[0].innerText="TIC TAC TOE"
    document.getElementById("party").style.display="none";
document.getElementsByClassName("popper")[0].style.display="none";
document.getElementsByClassName("popper")[1].style.display="none";

})