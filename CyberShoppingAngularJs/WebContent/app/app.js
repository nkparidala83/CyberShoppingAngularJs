var shoppingApp = angular.module("shoppingApp", ['ngResource']);


shoppingApp.config(['$resourceProvider', function($resourceProvider) {
	  // Don't strip trailing slashes from calculated URLs
	  $resourceProvider.defaults.stripTrailingSlashes = false;
	}]);

shoppingApp.controller("UserController", function($scope){
	$scope.todaysDate = new Date();
	$scope.firstName = 'Naresh';
	$scope.lastName = 'Paridala';
});

shoppingApp.factory("UserDetailsFactory", ['$resource', function($resource){
	var getUsers = function(){
		return $resource('/cybershopping/user/');
	};
	return {
		Users : getUsers()
	};
}]);


shoppingApp.controller("UserDetailsController", ['$scope', '$resource', 'UserDetailsFactory', function ($scope, $resource, UserDetailsFactory){
	//var usersService = $resource('/cybershopping/user/');
	$scope.users = UserDetailsFactory.Users.query();
	//$log.info($scope.users);
	console.log("users");
}]);
