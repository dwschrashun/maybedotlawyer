app.config(function($stateProvider) {
    $stateProvider.state('cheater', {
        url: '/cheater',
        templateUrl: '/pre-build/cheater/cheater.html',
        controller: 'CheaterController'
    });
});

app.controller("CheaterController", function ($scope, SongsFactory) {
	$scope.songs = SongsFactory.getSongs();
});