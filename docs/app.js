var app = angular.module("norme", ['route']);

var route = angular.module('route', ['ngRoute']);

route.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/home.html"
        })
        .when("/1", {
            templateUrl: "/pages/normatehnica1.html"
        })
        .when("/2", {
            templateUrl: "/pages/normatehnica2.html"
        })
        .when("/3", {
            templateUrl: "/pages/normatehnica3.html"
        })
        .when("/4", {
            templateUrl: "/pages/normatehnica4.html"
        })
        .when("/5", {
            templateUrl: "/pages/normatehnica5.html"
        })
        .when("/6", {
            templateUrl: "/pages/normatehnica6.html"
        })
        .when("/7", {
            templateUrl: "/pages/normatehnica7.html"
        })
        .when("/8", {
            templateUrl: "/pages/normatehnica8.html"
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


app.controller("normaTables", function ($scope, $http, $routeParams) {

    $http.get("navbar.json").success(function (response) {
        $scope.navigation = response;
    }).then(
        $http.get("pages/normatehnica1.json").success(function (response) {
            $scope.n1 = response;
        })
     ).then(
        $http.get("pages/normatehnica2.json").success(function (response) {
            $scope.n2 = response;
        })
     ).then(
        $http.get("pages/normatehnica3.json").success(function (response) {
            $scope.n3 = response;
        })
     ).then(
        $http.get("pages/normatehnica4.json").success(function (response) {
            $scope.n4 = response;
        })
     ).then(
        $http.get("pages/normatehnica5.json").success(function (response) {
            $scope.n5 = response;
        })
     ).then(
        $http.get("pages/normatehnica6.json").success(function (response) {
            $scope.n6 = response;
        })
     ).then(
        $http.get("pages/normatehnica7.json").success(function (response) {
            $scope.n7 = response;
        })
     ).then(
        $http.get("pages/normatehnica8.json").success(function (response) {
            $scope.n8 = response;
        })
     );
});