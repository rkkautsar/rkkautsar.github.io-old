var pattern = Trianglify({
	width: window.innerWidth,
	height: window.innerHeight,
	x_colors: 'random',
	seed: 'rkkautsar/github/io',
	cell_size: 50
});

$(function(){
	var header = $('section.head');

	header.append(pattern.canvas());

});

