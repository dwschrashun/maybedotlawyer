app.directive("beach", function () {
	return {
		restrict: "E",
		templateUrl: "/pre-build/beach/beach.html",
		link: function (scope, element, attributes) {
			scope.$on("scrollForever", function () {
				//scope.background = parallaxHelper.createAnimator(0.5, 500, 0, 200);
				var vpWidth = document.documentElement.clientWidth;
				var bgHeight = 2*(vpWidth / 1920 * 1080) + (vpWidth / 2560 * 1600);
				var scrollControl = new ScrollMagic.Controller();
				var beachTween1 = new TweenMax.to('#background', 1, {
				    y: "-20%"
				});
				var beachScene1 = new ScrollMagic.Scene({
				    triggerElement: '#beach',
				    duration: bgHeight * 0.8,
				})
				.setTween(beachTween1)
				//.addIndicators()
				.addTo(scrollControl);	
			});
		}
	};
});