'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:ExperienceCtrl
 * @description
 * # ExperienceCtrl
 * Controller of the assignmentApp - testimonials section
 */
angular.module('assignmentApp')
  .controller('ExperienceCtrl', function ($scope,$http) {
   
    $http.get('/jsonData/experience.json').then(function(res){
          $scope.experiences = res.data;                
        });

  });