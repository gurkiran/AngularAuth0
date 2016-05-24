'use strict';

angular
  .module('myApp',['auth0','angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
  .config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider){

    authProvider.init({
      domain: 'angular-guki.auth0.com',
      clientID: 'wd8jvzvEuVO5U8yiQTIdgbB9gip7wTz5'
    });

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: 'components/home/home.tpl.html'
      })
      .state('profile',{
        url: '/profile',
        templateUrl: 'components/profile/profile.tlp.html',
        controller: 'profileCtrl as user'
      })
  })
