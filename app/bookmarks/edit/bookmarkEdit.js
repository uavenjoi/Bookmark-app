'use strict';
angular.module('bookmark-edit',[
    'models.bookmarks',
    'models.categories'
])
    .config(function($stateProvider) {
        $stateProvider
            .state(
            'index.bookmarks.edit', {
                url: '/bookmarks/edit',
                views: {
                    'bookmarks': {
                        template: '<bookmarkedit/>'
                    }
                }
            })
    })
     .directive("bookmarkedit", ['$state', function($state ){
        return{
            restrict:"E",
            transclude: true,
            templateUrl: 'app/bookmarks/edit/bookmarkEdit.html',
            controller: 'BookmarksCtrl1',
            link:function(scope, element, attribute){
                //console.log(bookmarks);
               console.log(scope.tmp());

                scope.cancelEdit=function(){
                    scope.isEdit=false;
                  //  $state.go('index.main');
                }
                scope.saveBookmark=function(){
                    scope.bookmark.title=scope.editedTitle;
                    scope.bookmark.url=scope.editedUrl;
                    if(scope.bookmark.tags != scope.editedTags) {
                        var newTags = "";
                        scope.editedTags.split(',').forEach(function (newTag) {
                            newTag=newTag.trim();
                            if (scope.bookmark.tags.split(',').indexOf(newTag.trim()) < 0)
                                newTags += newTags.length>0 ? ","+ newTag: newTag;
                        })
                        scope.bookmark.tags = scope.editedTags;
                        scope.addTag(newTags);
                    }
                    //$state.go('index.main');
                    scope.isEdit=false;

                }
            }
        }
    }])
    .controller('BookmarksCtrl1', function BookmarksCtrl($scope, $stateParams, bookmarks) {

       $scope.tmp= function(){
                     return $stateParams;
       }
    })
                //console.log($scope.bookmarks);


;