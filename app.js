var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when("/home", {
            templateUrl : "'routes/home/home.html'",
            controller: "homeCtrl"
        })
        .when("/profie", {
            templateUrl : "'routes/profie/profie.html'",
            controller: "profieCtrl"
        })
        .when("/about", {
            templateUrl : "'routes/about/about.html'",
            controller: "aboutCtrl"
        })
        .otherwise("/home");

});