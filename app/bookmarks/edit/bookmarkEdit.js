'use strict';
angular.module('bookmark-edit',[
    'models.bookmarks',
    'models.categories'
])
    .directive("bookmarkedit", ['$state', function($state){
        return{
            restrict:"E",
            transclude: true,
            templateUrl: 'app/bookmarks/edit/bookmarkEdit.html',
            link:function(scope, element, attribute){
                scope.cancelEdit=function(){
                    scope.isEdit=false;
                }
                scope.saveBookmark=function(){
                    scope.bookmark.title=scope.editedTitle;
                    scope.bookmark.url=scope.editedUrl;
                    $scope.bookmark.tags = scope.editedTags;
                    scope.isEdit=false;
                }

            }
        }
    }])

;