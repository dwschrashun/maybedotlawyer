app.config(function($stateProvider) {
    $stateProvider.state('scroller', {
        url: '/news',
        templateUrl: '/pre-build/scroller/scroller.html',
        controller: 'ScrollerController'
    });
});

app.controller("ScrollerController", function ($scope, LyricsFactory) {
	$scope.lyricDisplay = false;
	$scope.scrollForever = false;
	$scope.player = false;
	$scope.lyrics = LyricsFactory;
	$scope.showLyrics = function () {
		$scope.lyricsDisplay = !$scope.lyricsDisplay;
		$scope.scrollForever = true;
		$scope.$broadcast("scrollForever");
	};
	$scope.showPlayer = function () {
		$scope.player = true;
	};
});