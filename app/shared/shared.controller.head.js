(function() {
  'use strict';

  angular
    .module('Shared')
    .controller('HeadController', HeadController);

  HeadController.$inject = ['$scope', '$routeParams', '$route', '$location', 'GlobalFactory'];
  function HeadController($scope, $routeParams, $route, $location, GlobalFactory)
  {
    var controller = this;
    var compRoot = 'app/components/';
    //controller.css = compRoot + 'main/main.index.view.css';

    // default value
    controller.css = '';
    controller.title = '';
    controller.description = '';

    $scope.$on('$routeChangeSuccess', function($event, current) {

      if (current.css)          { controller.css = compRoot + current.css; }
      if (current.title)        { controller.title = current.title; }
      if (current.description)  { controller.description = current.description; }
      
    });
  }
})();
