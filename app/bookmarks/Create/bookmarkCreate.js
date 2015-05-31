'use strict';
angular.module('bookmark-create',[
    'models.bookmarks',
    'models.categories'
])
.directive('bookmarkcreate',['$state', function($state){
        return{
            restrict:'E',
            transclude: true,
            templateUrl: 'app/bookmarks/create/bookmarkCreate.html',
            link:function(scope, element, attribute){

                scope.cancelCreate=function(){
                    scope.isCreate=false;
                }
                scope.saveCreate = function(){
                    var bookmark={};
                    bookmark.id=scope.bookmarks.length;
                    bookmark.title=scope.createTitle;
                    bookmark.url=scope.createUrl;
                    bookmark.category="cat";
                    scope.bookmarks.push(bookmark);
                    scope.isCreate=false;
                }
            }
        }
    }])