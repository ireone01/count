let count =0;
let x =document.getElementById("count-el");
let y= document.getElementById("save-el" );
function increment(){
    count++;
    x.textContent=count;
}
function Save(){
    count=count+"-";
    y.textContent+=count;
    count=0;
    x.textContent=0;
}