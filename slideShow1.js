const pics_src = ["pics/1.jpg","pics/2.jpg","pics/3.jpg"];
let num = -1;
 
 
function start() {
  setInterval(slideshow_timer,1000); 
}
 
function slideshow_timer(){
 
  if (num == 2){
      num = 0;
  } 
  else {
      num ++;
  }
 
  document.getElementById("mypic").src = pics_src[num];
}
