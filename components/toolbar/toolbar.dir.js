(function(){

  'use strict';

  angular
      .module('myApp')
      .directive('toolBar',toolbar);

  function toolbar(){
    return {
      templateUrl: 'components/toolbar/toolbar.tpl.html',
      controller: toolbarCtrl,
      controllerAs: 'toolbar'
    }
  }

  function toolbarCtrl(auth, store, $location){
     var vm = this;
     vm.login = login;
     vm.logout = logout;
     vm.auth = auth;

     function login(){
       console.log('Hello');
       auth.signin({},function(profile, token){
         store.set('profile', profile);
         store.set('id_token', token);
         console.log(profile);
         $location.path('/home');
       }, function(err){
         console.log(err);
       });
     }

     function logout(){
       auth.signout();
       store.remove('profile');
       store.remove('id_token');
       $location.path('/home');
     }

  }

}());
