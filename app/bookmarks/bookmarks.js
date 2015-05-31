'use strict';
angular.module('bookmarks',[
                'models.bookmarks',
                'models.categories',
                'bookmark-edit',
                'bookmark-create'
])
    .directive("bookmarks", ['$state',  function($state){
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
                    console.log(scope.title);
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
                                    scope.categories.splice(scope.categories.indexOf(category),1);
                            }
                        })
                    })
                }
                scope.clearFilter=function(){
                    scope.currentTag="";
                }
                scope.showLastBookmark=function(){
                    scope.editBookmark(scope.lastBookmark);
                }

            }
        }
    }])
.controller('BookmarksCtrl', function BookmarksCtrl($scope, $stateParams, bookmarks, categories) {
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
            //console.log($scope.bookmarks);
        });

    //$scope.getCurrentCategory = categories.getCurrentCategory;

    $scope.getCurrentTags = categories.getCurrentTags;
    $scope.isSelectedBookmark = function (bookmarkId) {
        return $stateParams.bookmarkId == bookmarkId;
    };

    //$scope.deleteBookmark = bookmarks.deleteBookmark;

    /*$scope.editBookmark=function(id){
            console.log(id);

    }*/
})
;