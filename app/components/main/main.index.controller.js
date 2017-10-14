(function () {
  'use strict';

  angular
    .module('Main')
    .controller('MainCtrl', MainController);

  MainController.$inject = [ '$scope', 'GlobalFactory', 'MainFactory'];

  function MainController($scope, GlobalFactory, MainFactory)
  {
    var controller = this;
    /*
    controller.attribute = '';


    controller.doSomething = function(input) {
      return MainFactory.doSomething(input);
    };
    */

  }

})();
