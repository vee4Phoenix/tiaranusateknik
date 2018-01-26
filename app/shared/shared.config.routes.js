(function () {
  'use strict';

  angular
    .module('Shared')
    .config(RouteConfig);

  RouteConfig.$inject = [ '$routeProvider', '$locationProvider', 'Constants' ];

  function RouteConfig($routeProvider, $locationProvider, Constants) {
    $routeProvider
      // home page
      .when(Constants.routes.PATH_INDEX, {
        templateUrl : 'app/components/home/home.index.html',
        title : 'Home',
        description : 'Tiara Nusa Teknik Landing Page'
      })

      .when(Constants.routes.PATH_OUR_BUSINESS, {
        templateUrl : 'app/components/about/about.our_business.html',
        title : 'Our Business',
        description : 'Tiara Nusa Teknik Our Business Page'
      })

      .when(Constants.routes.PATH_VISION_MISSION, {
        templateUrl : 'app/components/about/about.vision_mission.html',
        title : 'Vision & Mission',
        description : 'Tiara Nusa Teknik Vision Mission Page'
      })

      .when(Constants.routes.PATH_PROPELLERS, {
        templateUrl : 'app/components/products/product.propellers.html',
        title : 'Propellers',
        description : 'Tiara Nusa Teknik Propellers Page'
      })

      .when(Constants.routes.PATH_CPP, {
        templateUrl : 'app/components/products/product.propeller_cpp.html',
        title : 'CPP',
        description : 'Tiara Nusa Teknik CPP Page'
      })

      .when(Constants.routes.PATH_FPP, {
        templateUrl : 'app/components/products/product.propeller_fpp.html',
        title : 'FPP',
        description : 'Tiara Nusa Teknik FPP Page'
      })

      .when(Constants.routes.PATH_TUNNEL_THRUSTER, {
        templateUrl : 'app/components/products/product.propeller_tunnel_thruster.html',
        title : 'Tunnel Thruster',
        description : 'Tiara Nusa Teknik Tunnel Thruster Page'
      })

      .when(Constants.routes.PATH_SHAFT, {
        templateUrl : 'app/components/products/product.shaft.html',
        title : 'Shaft',
        description : 'Tiara Nusa Teknik Shaft Page'
      })

      .when(Constants.routes.PATH_STERNTUBE, {
        templateUrl : 'app/components/products/product.sterntube.html',
        title : 'Sterntube',
        description : 'Tiara Nusa Teknik Sterntube Page'
      })

      .when(Constants.routes.PATH_RUDDER_STOCK, {
        templateUrl : 'app/components/products/product.rudder_stock.html',
        title : 'Rudder Stock',
        description : 'Tiara Nusa Teknik Rudder Stock Page'
      })

      .when(Constants.routes.PATH_PARTNERS, {
        templateUrl : 'app/components/partners/partners.index.html',
        title : 'Partners',
        description : 'Tiara Nusa Teknik Partners Page'
      })

      .when(Constants.routes.PATH_CONTACT, {
        templateUrl : 'app/components/contact/contact.index.html',
        title : 'Contact Us',
        description : 'Tiara Nusa Teknik Contact Us Page'
      })

      .when(Constants.routes.PATH_ERROR_403, {
        templateUrl : 'app/components/errors/error.403.html',
        title : 'Error',
        description : 'Tiara Nusa Teknik Error 403 Page'
      })

      .when(Constants.routes.PATH_ERROR_404, {
        templateUrl : 'app/components/errors/error.404.html',
        title : 'Error',
        description : 'Tiara Nusa Teknik Error 404 Page'
      })

      .when(Constants.routes.PATH_ERROR_500, {
        templateUrl : 'app/components/errors/error.500.html',
        title : 'Error',
        description : 'Tiara Nusa Teknik Error 500 Page'
      })

      // .when(Constants.routes.PATH_INDEX, {
      //   templateUrl : 'app/components/home/home.index.html',
      //   css : 'home/home.index.css',
      //   controller : 'MainCtrl',
      //   controllerAs : 'controller',
      //   title : 'Home',
      //   description : 'Tiara Nusa Teknik Landing Page'
      // })

      .otherwise({
        redirectTo: Constants.routes.PATH_ERROR_404
      });

    $locationProvider.html5Mode(true);
  }

})();
