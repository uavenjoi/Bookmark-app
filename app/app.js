'use strict';
angular.module('BookmarkApp', [
    'ui.router',
    'categoriesModule',
    'bookmarks',
    'bookmark-edit',
    'bookmark-create',
    'mainModule'
    ]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.
        state('index', {
            url:'/',
            views:{
                'categories':{
                    template:'<zippy/>'
                },
                'bookmarks':{
                    template:'<bookmarks/>'
                }
            }
    })

    $urlRouterProvider.otherwise('/');
})
    .run(function () {
         console.log("1");
        })
    .factory('dataService',['categories',function($rootScope) {
        //console.log('dataService');

        return "" ;
    }])
;


