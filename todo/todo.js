$(function() {

  $(".item").on("click", function(event) {
    console.log(event);
  var elementThatWasClicked = $(".item");
    console.log(elementThatWasClicked);
    $(event.target).hide();
    // remove the element


  })

})
