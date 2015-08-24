'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the assignmentApp - skills section
 */
angular.module('assignmentApp')
  .controller('SkillsCtrl', function ($scope,$http) {
   
    $http.get('/jsonData/skills.json').then(function(res){
          $scope.skills = res.data;                
        });

    $scope.getTimes=function(n){
     return new Array(n);
   };

  });