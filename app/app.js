angular.module('mcHelper', [
    'ngRoute'
]).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl:  'templates/main.html',
        controller:   'MainController',
        controllerAs: 'MainCtrl'
    }).when('/item/list', {
        templateUrl:  'templates/item/list.html',
        controller:   'ItemListController',
        controllerAs: 'ItemLstCtrl'
    }).when('/items/:id', {
        templateUrl:  'templates/item/view.html',
        controller:   'ItemViewController',
        controllerAs: 'ItemVwCtrl'
    }).otherwise({
        redirectTo: '/'
    });
}).run(function($rootScope) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        console.log(event, current, previous, rejection);
    })
});


