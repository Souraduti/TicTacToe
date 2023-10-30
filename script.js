/* javascript code for tic tac toe */ 
function handler(event){
    const content  = event.target;
    if(content.hasAttribute("marked")) return;
    content.setAttribute("marked",true);
    if(won!=null) return;
    let index = parseInt(content.parentNode.getAttribute("id"));
    if(turn){
        arr[index] = 1;
        content.setAttribute("src","images/cross.jpg");
    }else{
        arr[index] = -1;
        content.setAttribute("src","images/circle.jpg");
    }
    turn = !turn;
    checkResult();
}
function resetSquares(){
    heading.innerHTML = "Tic-Tac-Toe";
    turn = true;
    won = null
    for(let i =0;i<9;i++){
        arr[i] = 0;
    }
    const cells = document.getElementsByClassName("cell");
    for(let i = 0;i<cells.length;i++){
        cells[i].firstChild.setAttribute("src","images/square2.jpg");
        cells[i].firstChild.removeAttribute("marked");
    }
}
function checkResult(){
    //rows
    console.log(arr);
    for(let i = 0;i<3;i++){
        let x = true,o = true;
        for(let j = 0;j<3;j++){
            if(arr[i*3+j]!=1) x = false;
            if(arr[i*3+j]!=-1) o = false;
        }
        if(x) won = 'x';
        else if(o) won = 'o';
    }
    //columns
    for(let i = 0;i<3;i++){
        let x = true,o = true;
        for(let j = 0;j<3;j++){
            if(arr[i+j*3]!=1) x = false;
            if(arr[i+j*3]!=-1) o = false;
        }
        if(x) won = 'x';
        else if(o) won = 'o';
    }
    
    //diagonals
    let x = true,o = true;
    for(let i = 0;i<3;i++){
        if(arr[4*i]!=1) x = false;
        if(arr[4*i]!=-1) o = false;
    }
    if(x) won = 'x';
    else if(o) won = 'o';

    x = true;
    o = true;
    for(let i = 0;i<3;i++){
        if(arr[2*i+2]!=1) x = false;
        if(arr[2*i+2]!=-1) o = false;
    }
    if(x) won = 'x';
    else if(o) won = 'o';

    if(won!=null) show_res();

    //check for draw
    let drawn  = true;
    for(let i = 0;i<9;i++){
        if(arr[i]==0){
            drawn = false;
            break;
        }
    }
    if(drawn) show_res();
}
function show_res(){
   const heading = document.getElementById("heading");
   let str;
   if(won=='x'){
    str = "player 1";
   }else if(won=='o'){
    str = "player 2";
   }
   if(won==null){
    heading.innerHTML = "Draw";
    return;
   }
   heading.innerHTML = "Congratulations !! " +  str + " Won ";
}
const arr = [0,0,0,0,0,0,0,0,0];
let turn = true;
let won = null;
const cells = document.getElementsByClassName("cell");
for(let i =0;i<cells.length;i++){
    cells[i].setAttribute("val",i);
    cells[i].addEventListener("click",handler);
}
resetButton.addEventListener("click",resetSquares);

