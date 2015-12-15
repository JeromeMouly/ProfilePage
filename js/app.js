$(document).ready(function() {
	
	var montrer = function(event) {
		event.preventDefault();
		$('.texte').hide();
		var id = $(this).attr('href');
		$(id).show();
	};
	$('a').on('click', montrer);

	$.getJSON("user-17.json", function(data) {
		var t = $('[elt]');
		for (var i = 0; i<t.length; i++) {
			var attribut = $(t[i]).attr("elt");
			var valeur = data[attribut];
			$(t[i]).html(valeur);
		};
	});

});

/*$.getJSON('user-17.json', function(data) {
		$('#contact').html(data.id.
			data.first_name
			data.last_name,
			data.occupation,
			data.badges,
			data.contact(data.email,data.website));
	});*/