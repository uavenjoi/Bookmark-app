'use strict';
angular.module('bookmarks',[
                'models.bookmarks',
                'models.categories',
                'bookmark-edit',
                'bookmark-create',
                'categoriesModule'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.
            state('index.bookmarks', {
                url:'/index.bookmarks',
                temlplate:'<bookmarks/>'
            })
    })

    .directive("bookmarks", ['$state',  function($state,dataService, $rootScope){
        return{
            restrict:"E",
            transclude: true,
            templateUrl: 'app/bookmarks/bookmarks.html',
            controller: 'BookmarksCtrl',
            link:function(scope,element,attribute) {
                scope.isEdit=false;
                scope.isCreate=false;
                scope.currentTag="";
                scope.id=0;

                scope.editBookmark = function (bookmark) {
                    console.log(bookmark);
                    scope.isEdit=true;
                    scope.bookmark=bookmark;
                    scope.editedTitle=bookmark.title;
                    scope.editedUrl=bookmark.url;
                    scope.editedTags=bookmark.tags;
                    scope.lastBookmark=bookmark;
                   // $state.go('edit',{id:bookmark.id});
                }
                scope.createBookmark= function () {
                    scope.isCreate=true;
                    scope.createTitle="";
                    scope.createUrl="";
                    scope.createTags="";
                 }
                scope.deleteBookmark= function(bookmark) {
                        _.remove(scope.bookmarks, function (b) {
                            return b.id == bookmark.id;
                        });
                     scope.removeTags(bookmark.tags);
                }
                scope.removeTags=function(tags){
                    var tagsArray=tags.split(',');
                    scope.categories.forEach(function(category) {
                        tagsArray.forEach(function(tag){
                            if(tag.trim()===category.name){
                                category.count--;
                                console.log(scope.categories.indexOf(category));
                                if(category.count===0)
                                    sope.categories.splice(scope.categories.indexOf(category),1);
                            }
                        })
                    })
                }
                scope.clearFilter=function(){
                    console.log(scope.categories);
                    //scope.getCurrentCategoryName="";
                    //scope.clearCurrentCategoryName
                    scope.currentTag="";


                }
                scope.showLastBookmark=function(){
                    scope.editBookmark(scope.lastBookmark);
                }

            }
        }
    }])
.controller('BookmarksCtrl', function BookmarksCtrl($scope, $rootScope, $stateParams, bookmarks, categories, dataService) {
    categories.setCurrentCategory();

    if ($stateParams.category) {
        categories.getCategoryByName($stateParams.category)
            .then(function (category) {
            categories.setCurrentCategory(category);
        })
    }

    bookmarks.getBookmarks()
        .then(function (result) {
            $scope.bookmarks = result;
            console.log(dataService.tags);
            console.log( $rootScope.categories);
        });

    $scope.getCurrentCategoryName = categories.getCurrentCategoryName;

    $scope.clearCurrentCategoryName= categories.setCurrentCategory("");

    $scope.getCurrentTags = categories.getCurrentTags;
    $scope.isSelectedBookmark = function (bookmarkId) {
        return $stateParams.bookmarkId == bookmarkId;
    };

})
;