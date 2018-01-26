(function() {
  'use strict';
  angular.module('Locale', []);
  angular.module('Shared', ['Locale']);
  angular.module('App', ['ngRoute', 'ui.bootstrap', 'Shared', 'ngAnimate', 'ngTouch']);
})();
