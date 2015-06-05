angular.module('starter.controllers', [])

  .controller('InicioCtrl', function ($scope, $http) {

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
        
        if(!cAire || !restriccion ){
          
          $scope.error = true;
        }

        $scope.calidad = {'ayer': cAire[0].innerHTML.toLowerCase(),
                          'hoy': cAire[1].innerHTML.toLowerCase(),
                          'mañana': cAire[2].innerHTML.toLowerCase()};

        $scope.restriccion = {'ayer': restriccion[0].innerHTML.toLowerCase(),
                              'hoy': restriccion[1].innerHTML.toLowerCase(),
                              'mañana': restriccion[2].innerHTML.toLowerCase()};
        
        $scope.hayRestriccion = $scope.restriccion.hoy == 'con restricción';
        
      }).error(function(err){
        
        $scope.error = true;
      });

  });
