'use strict';
angular.module('bookmark-create',[
    'models.bookmarks',
    'models.categories'
])
    .config(function($stateProvider) {
        $stateProvider
            .state(
            'index.bookmarks.create', {
                url: '/bookmarks/create',
                views: {
                    'bookmarks': {
                        template: '<bookmarkcreate/>'
                    }
                }
            })
    })
.directive('bookmarkcreate',['$state', function($state){
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/bookmarks/create/bookmarkCreate.html',
            link: function (scope, element, attribute) {
                scope.cancelCreate = function () {
                    scope.isCreate = false;
                   // $state.go('index.main');
                }
                scope.saveCreate = function () {
                    var bookmark = {};
                    bookmark.id = scope.bookmarks.length;
                    bookmark.title = scope.createTitle;
                    bookmark.url = scope.createUrl;
                    bookmark.tags = scope.createTags;
                    scope.bookmarks.push(bookmark);
                    scope.addTag(scope.createTags);
                    scope.isCreate = false;
                   // $state.go('index.main');
                }
                scope.addTag = function (tags) {
                    var tagsArray = [];
                    if (tags) {
                        tagsArray = tags.split(',');
                        var isNew = true;
                        tagsArray.forEach(function (tag) {
                            scope.categories.forEach(function (category) {
                                if (category.name === tag.trim()) {
                                    category.count++;
                                    isNew = false;
                                }
                            })
                            if (isNew) {
                                var newTag = {};
                                newTag.id = scope.length;
                                newTag.name = tag.trim();
                                newTag.count = 1;
                                scope.categories.push(newTag);
                            }
                        });
                    }
                }
            }
        }
    }]);