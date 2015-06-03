'use strict';
angular.module('mainModule',[])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.
            state('index.main', {
                url:'/main',
                temlplate:'<main/>'
            })
    })
.directive('main', function() {
        return {
            restrict:"E",
            temlateUrl: 'app/main/main.html',
            link: function (scope, element, attrs) {
            }
        }
    });