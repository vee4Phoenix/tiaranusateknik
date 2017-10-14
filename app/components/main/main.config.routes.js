(function () {
  'use strict';

  angular
    .module('Main')
    .config(MainConfig);

  MainConfig.$inject = [ '$routeProvider', '$locationProvider', 'MainConstants' ];

  function MainConfig($routeProvider, $locationProvider, MainConstants) {
    $routeProvider
      // home page
      .when(MainConstants.PATH_INDEX, {
        templateUrl : 'app/components/main/main.index.view.html',
        css : 'main/main.index.view.css',
        controller : 'MainCtrl',
        controllerAs : 'controller'
      })

      .otherwise({
        redirectTo: MainConstants.PATH_INDEX
      });

    $locationProvider.html5Mode(true);
  }

})();
