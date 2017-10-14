(function () {
  'use strict';

  angular
    .module('Template')
    .config(TemplateConfig);

  TemplateConfig.$inject = [ '$routeProvider', 'TemplateConstants' ];

  function TemplateConfig($routeProvider, TemplateConstants) {
    $routeProvider
      // home page
      .when(TemplateConstants.PATH_INDEX, {
        templateUrl : 'app/components/template/template.index.view.html',
        css : 'template/template.index.view.css',
        controller : 'TemplateCtrl',
        controllerAs : 'controller'
      })

      .otherwise({
        redirectTo: TemplateConstants.PATH_INDEX
      });
  }

})();
