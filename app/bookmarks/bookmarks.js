'use strict';
angular.module('bookmarks',[
                'models.bookmarks',
                'models.categories',
                'bookmark-edit'
])
    .directive("bookmarks", ['$state', function($state){
        return{
            restrict:"E",
            transclude: true,
            templateUrl: 'app/bookmarks/bookmarks.html',
            controller: 'BookmarksCtrl',
            link:function(scope,element,attribute) {
                scope.isEdit=false;
                scope.id=0;
                scope.editBookmark = function (bookmark) {
                    console.log(bookmark);
                    scope.isEdit=true;
                    scope.bookmark=bookmark;
                    scope.editedTitle=bookmark.title;
                    scope.editedUrl=bookmark.url;
                    console.log(scope.title);
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
        });

    $scope.getCurrentCategory = categories.getCurrentCategory;
    $scope.getCurrentCategoryName = categories.getCurrentCategoryName;
    $scope.isSelectedBookmark = function (bookmarkId) {
        return $stateParams.bookmarkId == bookmarkId;
    };

    $scope.deleteBookmark = bookmarks.deleteBookmark;

    /*$scope.editBookmark=function(id){
            console.log(id);

    }*/
})
;