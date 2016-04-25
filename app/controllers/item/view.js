'use strict';

angular.module('mcHelper', [])
    .controller('ItemViewController', function($routeParams) {
        console.log('view item', $routeParams.id);
    })
    .controller('ItemListController', function() {
        console.log('view all items');
    });