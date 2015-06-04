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
                    //controller:'controller:',
                    template:'<zippy/>'
                },
                'bookmarks':{
                    template:'<bookmarks/>'
                }
            }
           // abstract:true

    })
    //.state('edit', {
    //    url: '/edit',
    //    template: '<bookmarkedit/>'
    //})
    //.state('create', {
    //    url: '/create',
    //    template: '<bookmarkcreate/>'
    //});

    $urlRouterProvider.otherwise('/');
})
    .run(function () {
         console.log("1");
        })
    .factory('dataService',['categories',function($rootScope) {
        console.log('dataService');
       //
       //$rootScope.tags= [
       //     {"id": 0, "name": "Development", "count":2},
       //     {"id": 1, "name": "Design", "count":3},
       //     {"id": 2, "name": "Exercise", "count":2},
       //     {"id": 3, "name": "Humor", "count":3}
       // ];
       // //console.log(tags);
        return "" ;
    }])
;


