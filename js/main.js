var pattern = Trianglify({
	width: window.innerWidth + 200,
	height: window.innerHeight + 200,
	x_colors: 'random',
	seed: 'rkkautsar/github/io',
	cell_size: 50
});

$(function() {
	$('header').append(pattern.canvas());
});