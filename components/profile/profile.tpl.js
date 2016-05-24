(function(){

  'use strict';

  angular
    .module('myApp')
    .controller('profileCtrl', profileCtrl);

    function profileCtrl($http) {
      var vm=this;

      vm.message = 'Hello';
    }

}());
