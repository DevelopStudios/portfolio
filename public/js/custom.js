
$(function() {
	//Sort functionality
		var selectedClass = "";
		$(".sort").click(function(){
		selectedClass = $(this).attr("data-rel");
		$( '.sort[ data-rel=' + selectedClass + ']' ).addClass( 'active' );
		$( '.sort').not('[ data-rel=' + selectedClass + ']').removeClass('active');
    $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#portfolio").fadeTo(500, 1);
    }, 500);
	});

  // Show text overlay
  $('.company-image-overlay').hide();
  $('.tile').mouseover(handleHover).mouseout(handleOver);
  function handleHover() {
    let overlay = this.children[1];
		let overlayText = this.children[1].children;
    $(overlay).show();
		$(overlayText).show();
  }
  function handleOver() {
    let overlay = this.children[1];
    $(overlay).hide();
  }
});
