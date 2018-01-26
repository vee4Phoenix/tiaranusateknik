(function() {
  'use strict';

  angular
    .module('Shared')
    .controller('GlobalController', GlobalController);

  GlobalController.$inject = ['$scope', '$location', 'Constants', 'Locale_en_US', 'Locale_id'];
  function GlobalController($scope, $location, Constants, Locale_en_US, Locale_id)
  {
    var controller = this;

    // Loading dialog
    controller.isLoading = false;
    $scope.$on(Constants.ShowLoading, function() { controller.isLoading = true;  });
    $scope.$on(Constants.HideLoading, function() { controller.isLoading = false; });

    // routing accessor
    controller.routes = Constants.routes;

    // Text locale
    controller.locale = Locale_id.text;
    controller.selectedLang = 'id'; // id or en_US

    controller.onLanguageSelected = function(lang) {
      switch (lang) {
        case 'en_US':
          controller.locale = Locale_en_US.text;
          controller.selectedLang = lang;
          break;
        case 'id':
          controller.locale = Locale_id.text;
          controller.selectedLang = lang;
          break;
        default :
          controller.locale = Locale_id.text;
          controller.selectedLang = 'id';
          break;
      }
    };

    controller.onBack = function() {
      setTimeout(function() {
        window.history.back();
      },100);
    };

    controller.isBackButtonVisible = function() {
      return $location.path() != '/';
    };
  }
})();
