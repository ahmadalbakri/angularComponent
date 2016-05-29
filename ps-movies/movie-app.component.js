(function(){
	"use strict";
	
	var module = angular.module('psMovies');
	
	module.component("movieApp", {
		templateUrl : "/angular/ang/ps-movies/movie-app.component.html",
		$routeConfig: [
			{ path: "/home", component: "appHome", name: "Home"},
			{ path: "/list", component: "timelineCommenting", name: "List"},
			{ path: "/about", component: "appAbout", name: "About"},
			{ path: "/detail/:id/...", component: "movieDetails", name: "Details"},
			{ path: "/**", redirectTo: ["Home"]}
		]
	});
	
}());