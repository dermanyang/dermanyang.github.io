

window.addEventListener("load", function()  {
    var element = document.getElementById("overlay");
    element.classList.add("slide-out-top");

    var element = document.getElementById("loadingScreenText");
    element.classList.add("slide-out-top");

    var element = document.getElementById("name");
    element.classList.add("slide-in-bottom");
    // element.remove();
    // document.getElementById("overlay").remove();
})



$(document).ready(function() {
  $('#main-nav li a').click(function(e) {

  	var targetHref = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(targetHref).offset().top
	}, 1000);

    e.preventDefault();
  });
});
