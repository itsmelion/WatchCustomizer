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
        $scope.watch.case = getParameterByName('case');
        $scope.watch.bezel = getParameterByName('bezel');

        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return {};
            if (!results[2]) return {};
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        };


        $scope.select = function (name, properties) {
            $scope.watch[name] = properties;
            console.log();
        };


        // receives property name, and object name
        $scope.share = function share(key, value) {
            let properties = Object.keys(key);

            // JSON.stringify(value);
            key = encodeURI(key);
            value = encodeURI(value);

            var params = document.location.search.substr(1).split('&');

            var i = params.length;
            var x;
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