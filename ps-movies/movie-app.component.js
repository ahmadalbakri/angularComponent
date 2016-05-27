(function(){
	"use strict";
	
	var module = angular.module('psMovies');
	
	module.component("movieApp", {
		templateUrl : "/angular/ps-movies/movie-app.component.html",
		$routeConfig: [
			{ path: "/list", component: "timelineCommenting", name: "List"},
			{ path: "/about", component: "appAbout", name: "About"},
			{ path: "/detail/:id", component: "movieDetails", name: "Details"},
			{ path: "/**", redirectTo: ["List"]}
		]
	});
	
}());