(function(){
	"use strict";
	
	//var module = angular.module("psMovies", ["ngRoute"]);
	/*	
	module.config(function($routeProvider){
		$routeProvider
			.when("/list", {template: "<timeline-commenting></timeline-commenting>"})
			.when("/about", {template: "<app-about></app-about>"})
			.otherwise({redirectTo: "/list"});
	});
	*/
	
	var module = angular.module("psMovies", ["ngComponentRouter"]);
	
	module.value("$routerRootComponent", "movieApp");
	
	module.component("appHome",{
		template: "this is home page"
	});

	module.component("appAbout",{
		template: "this is about page"
	});	
	
}());