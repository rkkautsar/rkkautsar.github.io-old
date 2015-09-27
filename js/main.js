function changePattern() {
	var d = new Date();
	var pattern = Trianglify({
		width: window.innerWidth + 100,
		height: window.innerHeight + 100,
		x_colors: 'Blues',
		seed: d.getTime(),
		cell_size: 150,
		variance: 0.001
	});
	$('canvas').replaceWith(pattern.canvas());
}

$(function() {
	$('header').append($('<canvas></canvas>').attr('id', 'canvasPattern'));
	setInterval(changePattern, 300);
});
