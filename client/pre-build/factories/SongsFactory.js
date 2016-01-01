app.factory("SongsFactory", function () {
	var songs = [
		{
			name: "Miami / Atlanta",
		},
		{
			name: "Stadiums",
		},
		{
			name: "Fuck Hale and Hearty Soups",

		},		
		{
			name: "Weird Website",
		},
		{
			name: "At the Science Center",

		},
		{
			name: "Super Guys",

		},
		{
			name: "At This Fantastic Disco",

		},
		{
			name: "A Holiday Wish",

		},
	];
	songs.forEach(function (el, index) {
		el.y = (1080 * (1 + index));
	});
	function getSongs () {
		return songs;
	}
	return {getSongs: getSongs};
});