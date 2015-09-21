var pattern = Trianglify({
	width: window.innerWidth + 200,
	height: window.innerHeight + 200,
	x_colors: 'random',
	seed: 'notSoRandom',
	cell_size: 150
});

$(function() {
	$('header').append(pattern.canvas());
});
