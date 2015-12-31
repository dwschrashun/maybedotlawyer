app.factory("SongsFactory", function () {
	var songs = [
		{
			name: "Miami / Atlanta",
			x: 1000,
			y: 1000,
		},
		{
			name: "Stadiums",
			x: 1000,
			y: 1000,

		},
		{
			name: "Fuck Hale and Hearty Soups",
			x: 1000,
			y: 1000,

		},		
		{
			name: "Weird Website",
			x: 1000,
			y: 1000,

		},
		{
			name: "At the Science Center",
			x: 1000,
			y: 1000,
		},
		{
			name: "Super Guys",
			x: 1000,
			y: 1000,
		},
		{
			name: "At This Fantastic Disco",
			x: 1000,
			y: 1000,
		},
		{
			name: "A Holiday Wish",
			x: 1000,
			y: 1000,
		},
	];
	function getSongs () {
		return songs;
	}
	return {getSongs: getSongs};
});