const dependencies = ['ngSanitize', 'ngAnimate'];

const app = angular.module('WatchCustomizer', dependencies)

    .constant('models', './dummy/')

    .run(['$rootScope', '$location', '$window', '$http', 'models', function ($rootScope, $location, $window, $http, models) {

        $http.defaults.cache = true;

        $http.get(models + 'parts.json').then(
            function success(data) {
                $rootScope.categories = data.data;
            },
            function error(error) {
                console.warn('Could not get "parts.json"\n', error);
            }
        );

        $http.get(models + 'watch.json').then(
            function success(data) {
                $rootScope.baseWatch = data.data;
            },
            function error(error) {
                console.warn('Could not get "watch.model.json"\n', error);
            }
        );

    }])

    .controller('Watch', ['$rootScope', '$scope', '$http', function Watch($rootScope, $scope, $http) {

        $scope.watch = {};

        $scope.getPulseira = function getPulseira(pulseira) {

            $scope.watch.pulseira = pulseira;

            document.getElementById('debug').innerHTML = pulseira;
        };
    }]);