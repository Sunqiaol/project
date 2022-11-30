var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
this.curr =1;
this.totalscore=0;


function myFunction() {
  shuffleArray(nums);
  for (i = 0; i <= 15; i++) {
    document.getElementById("demo" + i).innerHTML = nums[i];
  }
  reset();
  this.totalscore=0;
}
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

document.getElementById("demo0").onclick = function() {
    if(demo0.innerHTML==curr){
        demo0.innerHTML= " ";
        document.getElementById("demo0").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo1").onclick = function() {
    if(demo1.innerHTML==curr){
        demo1.innerHTML= " ";
        document.getElementById("demo1").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo2").onclick = function() {
    if(demo2.innerHTML==curr){
        demo2.innerHTML= " ";
        document.getElementById("demo2").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo3").onclick = function() {
    if(demo3.innerHTML==curr){
        demo3.innerHTML= " ";
        document.getElementById("demo3").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo4").onclick = function() {
    if(demo4.innerHTML==curr){
        demo4.innerHTML= " ";
        document.getElementById("demo4").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo5").onclick = function() {
    if(demo5.innerHTML==curr){
        demo5.innerHTML= " ";
        document.getElementById("demo5").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo6").onclick = function() {
    if(demo6.innerHTML==curr){
        demo6.innerHTML= " ";
        document.getElementById("demo6").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo7").onclick = function() {
    if(demo7.innerHTML==curr){
        demo7.innerHTML= " ";
        document.getElementById("demo7").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo8").onclick = function() {
    if(demo8.innerHTML==curr){
        demo8.innerHTML= " ";
        document.getElementById("demo8").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo9").onclick = function() {
    if(demo9.innerHTML==curr){
        demo9.innerHTML= " ";
        document.getElementById("demo9").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo10").onclick = function() {
    if(demo10.innerHTML==curr){
        demo10.innerHTML= " ";
        document.getElementById("demo10").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo11").onclick = function() {
    if(demo11.innerHTML==curr){
        demo11.innerHTML= " ";
        document.getElementById("demo11").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo12").onclick = function() {
    if(demo12.innerHTML==curr){
        demo12.innerHTML= " ";
        document.getElementById("demo12").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo13").onclick = function() {
    if(demo13.innerHTML==curr){
        demo13.innerHTML= " ";
        document.getElementById("demo13").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo14").onclick = function() {
    if(demo14.innerHTML==curr){
        demo14.innerHTML= " ";
        document.getElementById("demo14").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}
document.getElementById("demo15").onclick = function() {
    if(demo15.innerHTML==curr){
        demo15.innerHTML= " ";
        document.getElementById("demo15").disabled = true;
        curr++;
        checkwin();
    }
    else{
        myFunction();
        reset();
    }
}


function reset(){
    for(i=0 ; i<=15; i++){
        document.getElementById("demo"+i).disabled = false;
    }
    this.curr=1;
}

function checkwin(){
  var win = new Boolean(true);
  for(i=0;i<=15;i++){
    if(document.getElementById("demo"+i).innerHTML !=" "){
      win = false;
    }
  }
  if(win == true){
    reset();
    myFunction();
    this.totalscore ++;
  }
}

function EndGame(){
  setTimeout(function(){ alert("Times Up Your Score is :" + this.totalscore); }, 15000);
}
