const dependencies = ['ngSanitize', 'ngAnimate'];

const app = angular.module('WatchCustomizer', dependencies)

    .run(['$rootScope', '$location', '$window', '$http', function ($rootScope, $location, $window, $http) {

        $http.defaults.cache = true;

    }])

    .controller('Watch', ['$scope', '$http', '$rootScope', function Watch($scope, $http, $rootScope) {
        $scope.watch = {};
        $scope.total = 0;
        const QueryParams = ["case", "bezel", "hands", "dial"];

        $http.get('./dummy/watch.json').then(
            function success(data) {
                $scope.baseWatch = data.data;

                for (var i = 0; i < QueryParams.length; i++) {
                    let param = getParameterByName(QueryParams[i]);

                    if (param !== null) {
                        $scope.watch[QueryParams[i]] = $scope.baseWatch[QueryParams[i]].details[param];
                    }
                    let items = Object.keys($scope.watch);
                    $scope.total = 0;
                    for (let i = 0; i < items.length; i++) {
                        $scope.total += $scope.watch[items[i]].value;
                    }
                }
            },
            function error(error) {
                console.error('Could not get "watch.json"', error);
            }
        );

        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return null;
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }


        $scope.select = function (name, properties) {
            $scope.watch[name] = properties;
            const items = Object.keys($scope.watch);
            $scope.total = 0;
            for (let i = 0; i < items.length; i++) {
                $scope.total += $scope.watch[items[i]].value;
            }

        };

        $scope.switch = function (name) {
            $scope.reveal = name;
        };

        // receives property name, and object name
        $scope.share = function share(key, value) {
            let properties = Object.keys(key);

            // JSON.stringify(value);
            key = encodeURI(key);
            value = encodeURI(value);

            let params = document.location.search.substr(1).split('&');

            let i = params.length;
            let x;
            while (i--) {
                x = params[i].split('=');

                if (x[0] == key) {
                    x[1] = value;
                    params[i] = x.join('=');
                    break;
                }
            }

            if (i < 0) {
                params[params.length] = [key, value].join('=');
            }
            // console.log('type of params:' + typeof params.join('&'));
            // console.log('content of params:' + params.join('&'));


            //this will reload the page, it's likely better to store this until finished
            window.history.pushState = params.join('&');
        };

    }]);