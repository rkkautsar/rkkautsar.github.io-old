var pattern = Trianglify({
	width: window.innerWidth,
	height: window.innerHeight,
	x_colors: 'Blues',
	seed: '1249u1hd2',
	cell_size: 50
});

$(function(){
	$('section.head').css('background-image', 'url(' + pattern.png() + ')');
});

