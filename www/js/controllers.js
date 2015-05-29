angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $http) {

    $http({
      url: 'http://seremi9.redsalud.gob.cl/?page_id=5037',
      method: 'GET'
    })
      .success(function(response){
        var tmp = document.implementation.createHTMLDocument();
        tmp.body.innerHTML = response;
        console.log(response);
        var parentTable = tmp.body.getElementsByTagName('table')[0];
        var table = parentTable.getElementsByTagName('table')[0];
        var datos = table.getElementsByTagName('b');
        console.log('Hoy: ' + datos[0].innerHTML);
        console.log('Mañana: ' + datos[1].innerHTML);
      });

    $scope.mensaje = 'Hola <b>mundo</b>';

  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    }
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

.directive('miDirectiva', function(){
    return {
      template: '<h1>{{attrs.titulo}}</h1>',
      scope: {},
      link: function(scope, elem, attrs){
        scope.attrs = attrs;
      }
    };
  })

;
