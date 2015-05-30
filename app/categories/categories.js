'use strict';
angular.module('categoriesModule',['models.categories'])
    .directive("zippy", function(){
        return{
             restrict:"E",
            transclude: true,
            templateUrl: 'app/categories/categories.html',
            controller:'CategoriesCtrl'
        }
    })
    .controller('CategoriesCtrl', function CategoriesCtrl($scope, categories) {
        $scope.getCurrentCategoryName = categories.getCurrentCategoryName;

        categories.getCategories()
            .then(function (result) {
                $scope.categories = result;
            });

        $scope.isCurrentCategory = function (category) {
            return category.name === $scope.getCurrentCategoryName();
        }
    })
    .controller('BookmarksCtrl', function BookmarksCtrl($scope, $stateParams, bookmarks, categories) {
        categories.setCurrentCategory();

        if ($stateParams.category) {
            categories.getCategoryByName($stateParams.category).then(function (category) {
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
    })
;



