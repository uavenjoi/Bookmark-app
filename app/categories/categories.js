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
    .controller('CategoriesCtrl', function CategoriesCtrl($scope, categories, dataService) {
        $scope.getCurrentCategoryName = categories.getCurrentCategoryName;
        categories.getCategories()
            .then(function (result) {
                $scope.categories = result;
            });

        $scope.isCurrentCategory = function (category) {
            return category.name === $scope.getCurrentCategoryName();
        }

        $scope.setCurrentTag=function(category){
            dataService.currentTag=category.name;
            $scope.currentTag=category.name;
            categories.setCurrentCategory(category);
        }
    })

;



