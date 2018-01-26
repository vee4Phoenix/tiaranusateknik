(function () {
  'use strict';

  angular
    .module('Shared')
    .constant('Constants', {
      Debug : true,

      // Path
      // Put routing here so it is accessible by controllers and views
      routes : {
        PATH_INDEX            : '/',
        PATH_OUR_BUSINESS     : '/about/our-business',
        PATH_VISION_MISSION   : '/about/vision-mission',
        PATH_PROPELLERS       : '/products/propellers',
        PATH_CPP              : '/products/propellers/cpp',
        PATH_FPP              : '/products/propellers/fpp',
        PATH_TUNNEL_THRUSTER  : '/products/propellers/tunnel-thruster',
        PATH_SHAFT            : '/products/shaft',
        PATH_STERNTUBE        : '/products/sterntube',
        PATH_RUDDER_STOCK     : '/products/rudder-stock',
        PATH_PARTNERS         : '/partners',
        PATH_CONTACT          : '/contact-us',
        PATH_ERROR_403        : '/errors/error-403',
        PATH_ERROR_404        : '/errors/error-404',
        PATH_ERROR_500        : '/errors/error-500'
      },

      ShowLoading : 'ShowLoading',
      HideLoading : 'HideLoading',
    });
})();
