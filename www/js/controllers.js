angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, $http) {

    $http({
      url: 'http://www.seremisalud9.cl/alerta_notifica/alerta.php',
      method: 'GET'
    })
      .success(function(response){
        var parser = new DOMParser(),
            html = parser.parseFromString(response,'text/html'),
            tInfo = html.getElementsByTagName('tbody')[1],
            cAire = tInfo.getElementsByTagName('tr')[5].getElementsByTagName('strong'),
            restriccion = tInfo.getElementsByTagName('tr')[6].getElementsByTagName('strong');

        $scope.calidad = {'ayer': cAire[0].innerHTML.toLowerCase(),
                          'hoy': cAire[1].innerHTML.toLowerCase(),
                          'mañana': cAire[2].innerHTML.toLowerCase()};

        $scope.restriccion = {'ayer': restriccion[0].innerHTML.toLowerCase(),
                              'hoy': restriccion[1].innerHTML.toLowerCase(),
                              'mañana': restriccion[2].innerHTML.toLowerCase()};

        console.log({calidad: $scope.calidad,
                     restriccion: $scope.restriccion});
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
