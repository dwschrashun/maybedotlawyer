app.config(function($stateProvider) {
    $stateProvider.state('scroller', {
        url: '/news',
        templateUrl: '/pre-build/scroller/scroller.html',
        controller: 'ScrollerController'
    });
});

app.controller("ScrollerController", function ($scope, LyricsFactory, $window) {
	$scope.lyricDisplay = false;
	$scope.scrollForever = false;
	$scope.player = false;
	$scope.loaded = false;
	$scope.lyrics = LyricsFactory;
	$scope.$on('$viewContentLoaded', function(event){ 
		$scope.loaded = true;
	});
	// console.log("window?", $window);
	angular.element(window).on("load", function (event) {
		$scope.loaded = true;
	});
	// console.log("onload?", $window.onload);
	//$scope.panoStyle = "height: 0px; width: 0px";
	//$scope.panoStyle = "overflow: hidden; height: 0px; width: 0px";
	$scope.showLyrics = function () {
		$scope.lyricsDisplay = !$scope.lyricsDisplay;
		$scope.scrollForever = true;
		$scope.$broadcast("scrollForever");
	};
	$scope.showPlayer = function () {
		$scope.player = true;
		//$scope.panoStyle = "";
		//$scope.panoStyle = "overflow: scroll; height: 0px; width: 0px";
	};
	$scope.vw = document.documentElement.clientWidth;
});