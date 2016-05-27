(function(){
	"use strict";
	
	var module = angular.module("psMovies");

	function controller($http){
			
		var model = this;
		model.movies = [];

		// automatically call by Angular
		model.$onInit = function(){
			fetchMovies($http).then(function(movies){
				model.movies = movies;
			});
		};

		model.upRating = function(movie){
			if(movie.rating < 5){
				movie.rating += 1;
			};
		};
		
		model.downRating = function(movie){
			if(movie.rating > 1){
				movie.rating -= 1;
			};
		};
	};
	
	function fetchMovies($http){
		return $http.get("/angular/movies.json")
		.then(function(response){
			return response.data
		});
	};
	
	module.component("timelineCommenting", {
		templateUrl : "/angular/ps-movies/movie-list.component.html",
		controllerAs : "model",
		controller: ["$http", controller]
	});
	
}());