'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:RecommendationCtrl
 * @description
 * # RecommendationCtrl
 * Controller of the assignmentApp - testimonials section
 */
angular.module('assignmentApp')
  .controller('RecommendationCtrl', function ($scope,$http) {
   
    $http.get('/jsonData/testimonial.json').then(function(res){
          $scope.testimonials = res.data;                
        });

  });