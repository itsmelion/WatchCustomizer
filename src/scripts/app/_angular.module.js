const dependencies = ['ngSanitize', 'ngAnimate'];

const app = angular.module('WatchCustomizer', dependencies)

    .constant('API_URL', '/api/v1/')
    .run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
        $rootScope.baseWatch = {
            'pulseira': {
                'couro': {
                    'nome': 'couro',
                    'valor': 200
                },
                'metal': {
                    'nome': 'metal',
                    'valor': 300
                },

            },
            'face': {
                'couro': 100,
                'metal': 50
            }
        };
    }])

    .controller('Watch', ['$rootScope', '$scope', '$http', function Watch($rootScope, $scope, $http) {

        $scope.watch = {};
        console.log($scope.baseWatch);

        $http.get('./dummy/parts.json').then(
            function success(data) {
                $scope.categories = data.data;
            },
            function error(error) {
                console.warn('Could not get "parts.json"\n', error);
            }
        )

        $scope.getPulseira = function getPulseira(pulseira) {

            $scope.watch.pulseira = pulseira;
            console.log(pulseira);
            console.log($scope.watch);

            document.getElementById('debug').innerHTML = pulseira;
        };
    }]);