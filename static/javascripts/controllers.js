var extensionControllers = angular.module('extensionPopup', []);

extensionControllers.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.when('/searchPage', {
			templateUrl: 'pages/searchPage.html',
			controller: 'searchPageController'
		}).when('/settingPage', {
			templateUrl: 'pages/settingPage.html',
			controller: 'settingPageController'
		}).when('/signoutPage', {
			templateUrl: 'pages/signoutPage.html',
			controller: 'signoutPageController'
		}).otherwise({
			redirectTo: '/searchPage'
		});
	}]);

extensionControllers.controller('searchPageController', ['$scope', function($scope){
}]);

extensionControllers.controller('settingPageController', ['$scope', function($scope){
}]);

extensionControllers.controller('signoutPageController', ['$scope', function($scope){
}]);

extensionControllers.controller('mainController', ['$scope', '$http', function($scope, $http){
	$http.get('http://175.126.232.145:8000/api-list/tutorials/').success(function(data){
		$scope.tutorials = data;
	});
}])
