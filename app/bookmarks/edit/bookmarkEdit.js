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

                    scope.isEdit=false;

                }
            }
        }
    }])

;