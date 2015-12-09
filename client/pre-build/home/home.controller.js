app.controller('HomeController', function($scope) {
	$scope.lawyer = "lawyer";
	var lawyerText = "LAWYER";
	var delay = 1000;
	function writeLawyer (index) {
		if (index === 0) {
			$scope.lawyer = "L";
		}
		else {
			$scope.lawyer += (lawyerText.charAt(index));
		}
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
	loopForever();
	setInterval(loopForever, 1000);
});