'use strict';

describe('Controller: RecommendationCtrl', function () {

  // load the controller's module
  beforeEach(module('assignmentApp'));

  var RecommendationCtrl,scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecommendationCtrl = $controller('RecommendationCtrl', {
      $scope: scope
    });
  }));

  it('should fetch the testimonials and attach to scope', function () {
    expect(scope.testimonials.length).toBe(3);
  });
});
