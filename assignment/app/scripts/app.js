'use strict';

/**
 * @ngdoc overview
 * @name assignmentApp
 * @description
 * # assignmentApp
 *
 * Main module of the application.
 */
angular
  .module('assignmentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/qualification', {
        templateUrl: 'views/qualification.html',
        controller: 'QualificationCtrl'
      })
      .when('/experience', {
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .when('/recommendation', {
        templateUrl: 'views/recommendation.html',
        controller: 'RecommendationCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
