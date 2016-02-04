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

	var addQuote = function(){
		var id = $scope.author + '' + $scope.text
	}

	$scope.deleteQuote = function() {

		$scope.quoteList.pop($scope.quoteList);
		console.log($scope.quoteList);
	}
		$scope.rated = function(){
			
			console.log(text);
		}

		// $scope.authorClick = function() {
		// 	console.log($scope.quote.author);
		// }



		var quoteSort = function(array){
			array.sort();
			console.log(array);
		}






	}])