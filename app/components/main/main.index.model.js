(function () {
  'use strict';

  angular
    .module('Main')
    .factory('MainFactory', MainFactory);

  MainFactory.$inject = [];

  function MainFactory()
  {
    return {
      /*
      doSomething: function(input) {
        return input;
      }
      */
    };
  }
})();
