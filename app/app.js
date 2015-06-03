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
    .factory('dataService',[function(){
        return{currentTag:""}
    }]);