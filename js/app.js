$(document).ready(function() {
	
	var montrer = function(event) {
		$('.accueil').hide();
		var id = $(this).attr('href');
		event.preventDefault();
		if (id == "#contact"){
			$('#openModal').show();	
		} else {
			$('.texte').hide();
			$(id).show();
		}
	};

	$('body').on('click', '.close', function(){
		$('#openModal').hide();
	});

	$('body').on('click', 'a', montrer);

	var theTemplate = function(themustache, cible, json) {
		var template = themustache;
		var info = Mustache.to_html(template, json);
		$(cible).html(info);
	}

	var id = 17;
	var queryString = window.location.search.substring(1);
	if (queryString) {
		queryString = querystring.split("=");
		id = querystring(1);
	}

	$.getJSON("https://s.idsympa.com/u-17.json", function(json) {
		var template = $('#template').html();
		var rendered = Mustache.render(template, json);
		$('body').html(rendered);
	});

});