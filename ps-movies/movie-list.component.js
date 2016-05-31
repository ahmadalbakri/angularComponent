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

		model.goTo = function(id){
			model.$router.navigate(["Details", {id:id}, "Overview"]);
		};

		model.upRating = function(movie){
			if(movie.rating < 10){
				movie.rating += 1;
			};
		};
		
		model.downRating = function(movie){
			if(movie.rating > 1){
				movie.rating -= 1;
			};
		};
	};
	
	module.component("timelineCommenting", {
		templateUrl : "/angular/ang/ps-movies/movie-list.component.html",
		controllerAs : "model",
		controller: ["$http", controller],
		bindings: {
			"$router": "<"
		}
	});
	
}());