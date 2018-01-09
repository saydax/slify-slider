jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        goRight();
    }, 3000);
  });
  
	var slideCount = $('#slify ul li').length;
	var slideWidth = $('#slify ul li').width();
	var slideHeight = $('#slify ul li').height();
	var slifyUlWidth = slideCount * slideWidth;
	
	$('#slify').css({ width: slideWidth, height: slideHeight });
	
	$('#slify ul').css({ width: slifyUlWidth, marginLeft: - slideWidth });
	
    $('#slify ul li:last-child').prependTo('#slify ul');

    function goLeft() {
        $('#slify ul').animate({
            left: + slideWidth
        }, 300, function () {
            $('#slify ul li:last-child').prependTo('#slify ul');
            $('#slify ul').css('left', '');
        });
    };

    function goRight() {
        $('#slify ul').animate({
            left: - slideWidth
        }, 300, function () {
            $('#slify ul li:first-child').appendTo('#slify ul');
            $('#slify ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        goLeft();
    });

    $('a.control_next').click(function () {
        goRight();
    });

});