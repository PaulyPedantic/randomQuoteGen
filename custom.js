//get quotes from andrux api thx andres
var thisQuote = '';
var author = '';
var categories = ['inspire', 'management', 'sports', 'life', 'funny', 'love', 'art', 'students'];
var category = categories[Math.floor(Math.random() * categories.length)];

var reqUrl = 'http://quotes.rest/qod.json?category=' + category;

function getQuote(url) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var rspns = JSON.parse(this.responseText)
			thisQuote = rspns.quote;
			author = rspns.author;
			$('#quote').empty();
			$('#author').empty();
			$('#quote').append(thisQuote);
			$('#author').append(author);
			$('a').attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(thisQuote + " ~" + author));
		};
	};
	xmlhttp.open("GET", url, false);
	xmlhttp.setRequestHeader('X-Mashape-Key', 'HNafX28TBqmsh49jDsou8UOiZwUQp1WEYFsjsnwlBHfj4WVpk0');
	xmlhttp.send();
}

//play with colors like the example does
var hue = ['teal', 'deep-purple', 'green', 'light-blue', 'indigo', 'blue', 'cyan', 'light-green'];
var hueCount = 1

function hueFlip() {
	hueCount++;
	var newHue = hue[hueCount % hue.length];
	$('#box').removeAttr("class");
	$('button').removeAttr("class");
	$('a').removeAttr("class");

	$('#box').addClass("card " + newHue + " darken-4");
	$('button').addClass("waves-effect btn-flat " + newHue + " accent-4");
	$('a').addClass("waves-effect btn-flat " + newHue + " accent-4");

};

//this is where the above functions actually execute
$(document).ready(function() {
	getQuote(reqUrl);
	$('#genbtn').click(function() {
		getQuote(reqUrl);
		hueFlip();
	});
});
