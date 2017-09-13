$(document).ready(function() {

	var $flowers = $('#flower-items');

	$flowers.find('a').on('click', function(e){
		e.preventDefault();
		
		var $link = $(this),
			$img = $link.find('img');
		
		$img.animate({
			'margin-left' : '400px',
			'width' : '+=50px'
		}, 3000, 'easeInOutBack');
	});
});
