app.directive("player", function (SongsFactory) {
	return {
		restrict: "E",
		templateUrl: "/pre-build/player/player.html",
		link: function (scope, element, attributes) {
			var audio = element.find("audio")[0];
			scope.currentSong = "0.mp3";
			scope.songs = SongsFactory.getSongs();
			scope.playSong = function (index) {
				if (index + ".mp3" === scope.currentSong) {
					if (audio.paused) audio.play();
					else audio.pause();
				}
				else {
					scope.currentSong = index + ".mp3";
					audio.load();
					setTimeout(function () {audio.play();}, 4000);
				}
			};
			scope.pauseAudio = function () {
				audio.pause();
			};
		}
	};
});