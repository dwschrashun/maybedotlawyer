app.directive("player", function (SongsFactory, $document) {
	return {
		restrict: "E",
		templateUrl: "/pre-build/player/player.html",
		link: function (scope, element, attributes) {
			var vpWidth = document.documentElement.clientWidth;
			var audio = element.find("audio")[0];
			audio.addEventListener("ended", function () {
				if (scope.current === 7) return;
				scope.playSong(scope.current + 1);
			});
			scope.current = 0;
			scope.currentSong = "0.mp3";
			scope.songs = SongsFactory.getSongs();
			function getScrollEl (index) {
				return $document.find("#pano" + index);
			}
			var scrollEl = getScrollEl(scope.current);
			scope.playSong = function (index) {
				if (index === scope.current) {
					if (audio.paused) { 
						audio.play();
					}
					else audio.pause();
				}
				else {
					scope.current = index;
					scope.currentSong = index + ".mp3";
					scrollEl = getScrollEl(scope.current);
					scrollToSong(scrollEl);
					audio.load();
					setTimeout(function () {
						scrollSong();
						audio.play();
					}, 3000);
				}
			};
			scope.pauseAudio = function () {
				audio.pause();
			};
			function scrollToSong(songEl) {
				console.log("scroll to song", scope.songs[scope.current].y, scope.current, songEl);
				$document.scrollTo(vpWidth, scope.songs[scope.current].y, 2000);
			}
			function scrollSong () {
				var remainingTime = Math.floor((audio.duration - audio.currentTime) * 1000);
				//console.log("scrollEl", scrollEl[0].offsetTop, scrollEl, remainingTime);
				$document.scrollTo(vpWidth + 3860, scope.songs[scope.current].y, remainingTime);
			}
		}
	};
});