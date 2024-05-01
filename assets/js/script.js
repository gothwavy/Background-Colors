let index = 0;

function changeColors(){
  let colors = ["#f00","#00f","#fa0","#0af","#0f0","#fad"];
  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if(index >= colors.length){
    index = 0;
  }
}