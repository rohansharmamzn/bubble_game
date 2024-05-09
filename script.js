function makebubble(){
    let bubble= "";
    for(let r=1;r<=133;r++)
    { let ran=Math.floor(Math.random()*10);
      bubble+=`<div class="bubble"> ${ran}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=bubble;    
}
makebubble();
let time=60;
function timer(){
let a=setInterval(function(){ 
    if(time>0) {   time--;
 document.querySelector("#timeji").textContent=time; }
 else{
 clearInterval(a);
 document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`
 }
},1000)
}
timer();
let rand;
function getnewhit(){
    rand=Math.floor(Math.random()*10);
    document.querySelector("#hitt").textContent=rand;
}
getnewhit();
let scorei=0;
function increasescore(){
    scorei+=10;
    document.querySelector("#scoreval").textContent=scorei;
}
document.querySelector("#pbtm").addEventListener("click",function(det){
   let clicknum= Number(det.target.textContent);
   if(clicknum===rand) increasescore();
   getnewhit();
   makebubble();

})


