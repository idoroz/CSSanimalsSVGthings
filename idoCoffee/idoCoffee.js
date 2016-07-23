$(".idoWrapper").hover(
  function () {
     $("#idoArm").removeClass("AnimateOut");
     $("#idoBrow").removeClass("AnimateOut");
     $("#idoArm").addClass("Animate");
     $("#idoBrow").addClass("Animate");
     $(".steam-container").css("visibility", "hidden");
  },
  function () {
    $("#idoArm").addClass("AnimateOut");     
    $("#idoBrow").addClass("AnimateOut");
    $("#idoArm").removeClass("Animate");
    $("#idoBrow").removeClass("Animate");
    $(".steam-container").css("visibility", "visible");
  });

