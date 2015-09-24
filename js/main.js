var pattern = Trianglify({
	width: window.innerWidth + 100,
	height: window.innerHeight + 100,
	x_colors: 'random',
	seed: 'notSoRandom',
	cell_size: 150
});

$(function() {
	$('header').append(pattern.canvas());
});
