// number of drops created.
var nbDrop = 800;

// function to generate a random number range.
function randRange(minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

  for (i = 1; i < nbDrop; i++) {
    var dropLeft = randRange(0, 500);
    var dropTop = randRange(-1000, 1400);

    $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
    $('#drop' + i).css('left', dropLeft);
    $('#drop' + i).css('top', dropTop);
  }

}
// Make it rain
createRain();








function thunderflash() {
    $(".moonwrapper").removeClass("flashit");
    $(".lightning").css("display", "block");
    setTimeout(function() {
        $(".moonwrapper").addClass("flashit");
      $(".lightning").css("display", "none");
    }, 1);
  
};

    setInterval(thunderflash, 5000);