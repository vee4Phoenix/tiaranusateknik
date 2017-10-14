(function() {
  'use strict';
  angular.module('Shared', []);
  angular.module('Main', []);
  angular.module('App', ['ngRoute', 'ui.bootstrap', 'Shared', 'Main','ngAnimate', 'ngTouch']);
})();
