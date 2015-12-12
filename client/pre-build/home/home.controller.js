app.controller('HomeController', function($scope, $state, CanvasFactory) {
	$scope.lawyer = "MAYBE";
	var lawyerText = "LAWYER";
	var delay = 1000;
	function writeLawyer (index) {
		if (index === 0) $scope.lawyer = "L";
		else $scope.lawyer += (lawyerText.charAt(index));
		$scope.$digest();
	}
	function loopForever () {
		for (var j = 0; j < lawyerText.length; j++) {
			// also works!
			// setTimeout(writeLawyer, delay, j);
			setTimeout((function(index) {
				return function () {
					writeLawyer(index);
				};
			})(j), delay);
			delay += 1000;
		}
	}
	$scope.maybe = false;
	$scope.flood = false;
	$scope.lawyerClick = function () {
		$scope.maybe = !$scope.maybe;
	};
	$scope.maybeClick = function () {
		CanvasFactory.animateChin(canvas, $scope.canvasSize, 1, vpWidth).then(function(done) {
			$scope.flood = true;
			//$scope.mouthPosStr = "left: 0px%; top: 0px;";
			console.log("flood", $scope.flood);
			setTimeout(function () {
				console.log("state change");
				$state.go("scroller");
			}, 3000);
		});
	};
    var vpWidth = document.documentElement.clientWidth;
    var vpHeight = document.documentElement.clientHeight;
    $scope.canvasSize = CanvasFactory.getSize(vpWidth);
    var canvas = document.querySelector('#bg');  
	var mouthPosition = {};
	mouthPosition.x = ((vpWidth - $scope.canvasSize.width) / 2) + (1221 * $scope.canvasSize.width / 1435);
	mouthPosition.y =  10 + 806 * $scope.canvasSize.width / 1435;
	$scope.mouthPosStr = `top:${mouthPosition.y}px; left:${mouthPosition.x}px`;

    loopForever();
	setInterval(loopForever, 1000);
    CanvasFactory.drawImg(canvas, $scope.canvasSize, 0);

});