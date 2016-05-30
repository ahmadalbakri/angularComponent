(function(){
	"use strict";
	
	var module = angular.module('psMovies');
	
	function commentController($http){
		var model = this;
		model.movies = [];
		
		model.$onInit = function(){
			fetchComment($http).then(function(movies){
				model.movies = movies;
			});
		};
		
		model.text = 'hi';
		model.submitComment = function(id){
			if (model.text) {
				model.list.push(this.text);
				model.text = '';
			}			
		};
	}
	
	function fetchComment($http) {
		return $http.get("/angular/movies.json")
		.then(function(response){
			return response.data
		});		
	}	
	
	 // https://posttestserver.com/post.php
	
	module.component("appComment", {
		templateUrl : "/angular/ps-movies/movie-comment.component.html",
		controllerAs : "model",
		controller : ["$http", commentController],
		bindings: {
			"$router": "<"
		}
	});
	
}());


 angular.module('submitExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.list = [];
      $scope.text = 'hello';
      $scope.submit = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
      };
    }]);