gp=[];
userch=[]
le=0;
buttcolors=["red","blue","green","yellow"]; 
tog=1;
$(document).keypress(function(){
    if(tog===1){
    $("#level-title").text("Level "+le);
    nextSequence();
    tog=0;
    }
});
$(".btn").click(function(){
  var us = $(this).attr("id");
  userch.push(us);
  plays(us);
  ani(us);
  checkAnswer(userch.length-1);
//1 second
 
});
function plays(buttchoose){
    var sou=new Audio("sounds/"+buttchoose+".mp3");
    sou.play();
}
function checkAnswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gp[currentLevel] === userch[currentLevel]) {

      console.log("success");

      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userch.length === gp.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
       
      }

    } else {
      $("#level-title").text("Game Over, Press Any Key to Restart" );  
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200 );
      var sou=new Audio("sounds/wrong.mp3");
    sou.play();
    startover();
    }

}
function startover(){
  le=0;
  tog=1;
  gp=[];
}
function nextSequence(){
  userch=[];
    le++;
    $("#level-title").text("Level "+le);   
    var a=Math.floor(Math.random()*4);
    buttchoose=buttcolors[a];
    gp.push(buttchoose);
     $("#"+buttchoose).fadeOut(100).fadeIn(100);
     plays();
}

function ani(col){
    $("#"+col).addClass("pressed");
    setTimeout(function() {
        $("#"+col).removeClass("pressed");
    }, 100);
    
}
