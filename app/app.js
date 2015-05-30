'use strict';
angular.module('BookmarkApp', [
    'ui.router',
    'categoriesModule',
    'bookmarks',
    'bookmark-edit'
    ]).config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('index', {
                url: '',
                abstract: true
            })
            //.state('edit',{
            //    url:'edit/:id',
            //    template:'<bookmark-edit/>'
            //}
        //);
        $urlRouterProvider.otherwise('/');
        }).
        run(function () {
            console.log("1");
        });