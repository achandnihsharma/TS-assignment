'use strict';

/**
 * @ngdoc function
 * @name assignmentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assignmentApp
 */
angular.module('assignmentApp')
  .controller('SkillsCtrl', function ($scope) {
    $scope.skills = [
      {skill: 'HTML 5',rating : 5 }, 
      {skill: 'CSS3 / SCSS',rating : 5 },
      {skill: 'JavaScript / jQuery',rating : 5 },
      {skill: 'Ajax',rating : 4 },
      {skill: 'AngularJS',rating : 2 },
      {skill: 'Bootstrap',rating : 2 },
      {skill: 'Responsive Web Design',rating : 3},
      {skill: 'Cross Browser Compatibility',rating : 3 },
      {skill: 'Accesibility',rating : 3 },
      {skill: 'Branding',rating : 4 },
      {skill: 'A/B Testing',rating : 4 },
      {skill: 'Project Management',rating : 4 },
      {skill: 'Vendor Management',rating : 4 },
      ];


    $scope.getTimes=function(n){
     return new Array(n);
   };

  });
