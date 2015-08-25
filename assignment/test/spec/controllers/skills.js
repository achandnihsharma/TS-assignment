'use strict';

describe('', function () {

  // load the controller's module
  beforeEach(module('assignmentApp'));

  var SkillsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SkillsCtrl = $controller('SkillsCtrl', {
      $scope: scope
    });
  }));

  it('should get the json data from model', function () {
    expect(scope.skills.length).not.toBe(0);
  });

  it('should return an array of a undefined elements', function () {
    
    var skill = {'skill': 'Ajax','rating' : 4 };
    var arr = scope.getTimes(skill.rating);
    expect(arr).not.toBe([undefined,undefined,undefined,undefined]);
  });

});
