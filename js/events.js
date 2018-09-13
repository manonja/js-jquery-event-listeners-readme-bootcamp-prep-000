//define functions here

function getIt(){
  const clicked = $('p').on('click', function(){
    alert(`Hey!`)
    return clicked
  })
}

function frameIt(){
 $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  const keyPressed = $('input').on('load', function(key){
    if(key.which === )
  })
  return keyPressed
}


$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();

});
