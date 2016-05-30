(function(){
	"use strict";
	
	var module = angular.module("psMovies");

	module.component("movieDetails", {
		templateUrl : "/angular/ps-movies/movie-details.component.html",
		/*
		// execute before $routerOnActivate, get http from server to check can proceed(with auth) or not
		$canActivate : function($timeout){
			return $timeout(function(){
				return true;
			}, 2000);
		}
		*/
		$routeConfig: [	
			{ path: "/overview", component: "movieOverview", name: "Overview"},
			{ path: "/cast", component: "movieCast", name: "Cast"},
			{ path: "/director", component: "movieDirector", name: "Director"}
		],
		controllerAs : "model",
		controller : ["$http", detailController]
	});

	function detailController($http){
		var model = this;
		model.movies = [];
		
		model.$routerOnActivate = function(next){ // next : current, previous : coming from
			model.id = next.params.id;
		};

		model.$onInit = function(){
			fetchMovies($http).then(function(movies){
				model.movies = movies;
				//console.log(model);
			});
		};	
	};

	module.component("movieOverview", {
		template: "movie overview"
	});

	module.component("movieCast", {
		template: "movie cast"
	});

	module.component("movieDirector", {
		template: "movie director"
	});

	function fetchMovies($http){
		return $http.get("/angular/movies.json")
		.then(function(response){
			return response.data
		});
	};
}());