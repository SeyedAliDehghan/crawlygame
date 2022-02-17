let step=1;
let key=[];
function start(){
    step=1;
    key=[];
    for (let i=0;i<5;i++){
        let tmpKey=[];
        let tmpA=Math.floor((Math.random() * 1000) + 1);
        let tmpB=Math.floor((Math.random() * 1000) + 1);
        // console.log(tmpA)
        if (tmpA%2===0){
            tmpKey.push(true);
            tmpKey.push(false);
        }else {
            tmpKey.push(false);
            tmpKey.push(true);
        }
        key.push(tmpKey);
    }
    console.log(key)

    restartGame();
}
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('You Are Half Way');
    console.log('Just decide true is safe or false is safe? xD');
    // console.log(step)
    start();
});
window.addEventListener('load', (event) => {

});

// Get Elements
const rightButton=document.getElementById("rB");
const leftButton=document.getElementById("lB");
const botGlasses=document.getElementsByClassName("topGlass");
const topGlasses=document.getElementsByClassName("botGlass");
const gameSec=document.querySelector('.glassesSection');
const endImg=document.getElementById("endImg");
const startImg=document.getElementById("startImg");

// Event Listeners
rightButton.addEventListener('click',jump);
leftButton.addEventListener('click',jump)
// Functions
function jumpRight(){
    // console.log(key[step][1]);
    if(step>=2){
        botGlasses[step-2].src="../img/GLASS.png";
        botGlasses[0].src="../img/GLASS.png";
        topGlasses[step-2].src="../img/GLASS.png";
        topGlasses[0].src="../img/GLASS.png";
    }
    if (key[step-1][1]===true){
        topGlasses[step-1].src="../img/GLASS_on.png";
        step++;
    }else {
        lose();
    }
    check();

}
function jumpLeft(){
    if(step>=2){
        topGlasses[step-2].src="../img/GLASS.png";
        topGlasses[0].src="../img/GLASS.png";
        botGlasses[step-2].src="../img/GLASS.png";
        botGlasses[0].src="../img/GLASS.png";
    }
    if (key[step-1][0]===true){
        botGlasses[step-1].src="../img/GLASS_on.png";

        step++;
    }else {
        lose();
    }
    check();

}
function jump(event){
    
    if (step===1){
        startImg.src="../img/STARTPLACE.png";
    }
    if (step<=5){
        console.log(event.target)
        if (event.target.id==="lB"){
            jumpLeft();
        }else if(event.target.id==="rB"){
            jumpRight();
        }
    }
    // check()
}
function check(){
    if (step===6){
        win();
    }
}
function lose(){
    
    Swal.fire({
        icon: 'error',
        title: 'Oops... You Died!',
        text: 'Wanna One More Shot?!',
        footer: 'try one more time...',
        confirmButtonText: 'restart game',
      }).then((result) => {
        console.log("again");
        start();
      })
}
function win(){

    Swal.fire({
        icon: 'success',
        title: 'Hooray...',
        text: 'Wanna play one more time?!',
        footer: 'play one more time',
        confirmButtonText: 'restart game',
        backdrop: `
    rgba(0,0,123,0.4)
    url("../img/nyan-cat.gif")
    left top
    no-repeat
  `
      }).then((result) => {
        start();
      })
}
function restartGame(){
    startImg.src="../img/startplace_on.png";
    for(let i=0;i<5;i++){
        topGlasses[i].style.opacity="1";
        botGlasses[i].style.opacity="1";
        botGlasses[i].src="../img/GLASS.png";
        topGlasses[i].src="../img/GLASS.png";
    }
}