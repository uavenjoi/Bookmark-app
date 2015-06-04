'use strict';
angular.module('categoriesModule',['models.categories','bookmark-create'])

    .directive("zippy", function(){
        return{
             restrict:"E",
            transclude: true,
            templateUrl: 'app/categories/categories.html',
            controller:'CategoriesCtrl',
            link: function(scope,element,attrs) {
                scope.tmp=scope.currentTag
            }
        }
    })
    .controller('CategoriesCtrl', function CategoriesCtrl($scope, $rootScope, categories, dataService) {
        $scope.getCurrentCategoryName = categories.getCurrentCategoryName;
        categories.getCategories()
            .then(function (result) {
                $rootScope.categories = result;
            });

        $scope.isCurrentCategory = function (category) {
            return category.name === $scope.getCurrentCategoryName();
        }

        $rootScope.setCurrentTag=function(category){
            $scope.currentTag=category.name;
            categories.setCurrentCategory(category);
            console.log($scope.categories);
            console.log(category);
            console.log($rootScope.categories);

        }
    })

;



