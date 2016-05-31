(function(){
	"use strict";
	
	var module = angular.module('psMovies');
	
	function commentController($http){
		var model = this;
		model.comment = [];
		// model.movies = [];
		
		// model.$onInit = function(){
		// 	fetchComment($http).then(function(movies){
		// 		model.movies = movies;
		// 	});
		// };

		model.submitComment = function(){
			$http({
                method: 'POST',
                url: 'https://posttestserver.com/post.php',
                data: $.param(model.comment), // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log(data);
                if (!data.success) {
                    // if not successful, bind errors to error variables
                    model.errorName = data.errors.name;
                    model.errorSuperhero = data.errors.superheroAlias;
                } else {
                    // if successful, bind success message to message
                    model.message = data.message;
                    model.errorName = '';
                    model.errorSuperhero = '';
                }
            });
		};
	}
	
	module.component("appComment", {
		templateUrl : "/angular/ang/ps-movies/movie-comment.component.html",
		controllerAs : "model",
		controller : ["$http", commentController],
		bindings: {
			"$router": "<"
		}
	});	
}());


// https://github.com/scotch-io/submitting-forms-angular/blob/master/index.html
// function formController($scope, $http) {
//     // create a blank object to hold our form information
//     // $scope will allow this to pass between controller and view
//     $scope.formData = {};
//     // process the form
//     $scope.processForm = function() {
//         $http({
//                 method: 'POST',
//                 url: 'process.php',
//                 data: $.param($scope.formData), // pass in data as strings
//                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
//             })
//             .success(function(data) {
//                 console.log(data);
//                 if (!data.success) {
//                     // if not successful, bind errors to error variables
//                     $scope.errorName = data.errors.name;
//                     $scope.errorSuperhero = data.errors.superheroAlias;
//                 } else {
//                     // if successful, bind success message to message
//                     $scope.message = data.message;
//                     $scope.errorName = '';
//                     $scope.errorSuperhero = '';
//                 }
//             });
//     };
// }