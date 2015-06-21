var model = angular.module("myApp", ["ngRoute"]);

model.controller("myCtrl", ["$scope", "$location", function ($scope, $location) {

    $scope.$location = $location;
}]);
angular.element(document).ready(function () {
    //angular.bootstrap(document, ["myApp"]);
});
model.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/index", {
        templateUrl: "templates/index.html"
    }).when("/news", {
        templateUrl: "templates/news.html"
    }).when("/html5", {
        templateUrl: "templates/html5.html"
    }).when("/css3", {
        templateUrl: "templates/css3.html"
    }).when("/js", {
        templateUrl: "templates/js.html"
    }).otherwise({
        redirectTo: "/index"
    });
}]);