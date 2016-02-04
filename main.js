var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function($scope){


	$scope.quoteList = []
	$scope.text = {}

	var quoteCon = function(author, quote, rating){
		this.author = author;
		this.quote = quote;
		this.rating = rating;
	}

	$scope.submitQuote = function() {

		$scope.quoteList.push($scope.text);
		console.log($scope.quoteList);
		$scope.text = {}
		$scope.rating = {}
	}


	$scope.deleteQuote = function() {

		$scope.quoteList.pop($scope.quoteList);
		console.log($scope.quoteList);
	}

	$scope.rated = function(){
		$scope.quoteList.push($scope.rating);
		console.log(rating);
	}
		// $scope.rated = function(){
			
		// 	console.log(text);
		// }
		// $scope.myarray = [{author: dana, author: bob}];

		// $scope.sortStuff = function(a, b){
		// 	$scope.myarray.sort(function(a, b){
		// 		var nameA=a.author, nameB=b.author;
		// 		if (nameA < nameB){
		// 			return -1
		// 		} else if (nameA > nameB){
		// 			return 1
		// 		} else {
		// 			return 0
		// 		}
		// 	}
		// )}
		// 	console.log(sortStuff());







	}])