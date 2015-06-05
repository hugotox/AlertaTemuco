angular.module('starter.services', [])

  .factory('RestriccionService', function ($http, $q) {

    var url = 'http://www.seremisalud9.cl/alerta_notifica/alerta.php';
    var data = {};
    var promiseObj;

    var loadData = function () {
      promiseObj = $q.defer();
      $http({url: url, method: 'GET'}).success(function (response) {
        var parser = new DOMParser(),
          html = parser.parseFromString(response, 'text/html'),
          tInfo = html.getElementsByTagName('tbody')[1],
          cAire = tInfo.getElementsByTagName('tr')[5].getElementsByTagName('strong'),
          restriccion = tInfo.getElementsByTagName('tr')[6].getElementsByTagName('strong');

        data.calidad = {
          'ayer': cAire[0].innerHTML.toLowerCase(),
          'hoy': cAire[1].innerHTML.toLowerCase(),
          'mañana': cAire[2].innerHTML.toLowerCase()
        };

        data.restriccion = {
          'ayer': restriccion[0].innerHTML.toLowerCase(),
          'hoy': restriccion[1].innerHTML.toLowerCase(),
          'mañana': restriccion[2].innerHTML.toLowerCase()
        };
        promiseObj.resolve(data);
      }).error(function () {
        promiseObj.reject();
      });
    };

    return {
      getRestriccionData: function () {
        if (!promiseObj) {
          loadData();
        }
        return promiseObj.promise;
      },
      reload: function () {
        loadData();
        return promiseObj.promise;
      }
    };

  });
