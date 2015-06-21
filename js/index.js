var model = angular.module("myApp", ["ngRoute"]);

model.controller("myCtrl", ["$scope", "$location", function ($scope, $location) {

    $scope.$location = $location;
}]);
angular.element(document).ready(function () {
    //angular.bootstrap(document, ["myApp"]);
});

model.run(["$rootScope","$location", function ($rootScope,$location) {
    $rootScope.$on("$viewContentLoaded", function () {
        switch ($location.path()) {
            case "/index":

                break;
            case "/news":
                break;
            case "/html5":
                !function (doc, m) {
                    var aImg = []

                    for (var i = 1; i <= 26; i++) {
                        var src = "http://www.xinhuatone.com/zt/m/tpmb01/images/" + i + ".jpg";
                        aImg.push(src);
                    }
                    loading(aImg, function () {
                       
                    })

                    function loading(aImg, fn) {
                        var canvas = doc.getElementById("canvas");//画布
                        var context = canvas.getContext("2d");//画笔
                        var x = y = r = 100;
                        var len = aImg.length;
                        var count = 0;
                        loader();
                        function loader() {
                            var img = new Image();
                            count++;
                            img.onload = img.onerror = function () {

                                if (count < len) {
                                    loader();
                                }
                                else if (count / len === 1) {
                                    fn && fn();
                                }

                                context.fillStyle = "#0f0";
                                context.beginPath();
                                context.clearRect(0, 0, canvas.width, canvas.height);
                                context.arc(x, y, r, -.5 * m.PI, (count / len * 2 - .5) * m.PI, false);

                                context.lineTo(x, y);
                                context.closePath();
                                context.fill();
                                context.fillStyle = "#fff";
                                context.beginPath();
                                context.arc(x, y, r - 10, 0, 2 * m.PI, false);
                                context.closePath();
                                context.fill();
                                context.fillStyle = "#000";
                                context.font = "20px Georgia";
                                var prec = parseInt(count / len * 100) + "%";
                                context.fillText(prec, (r * 2 - context.measureText(prec).width) / 2, y);

                            }

                            img.src = aImg[count - 1];
                        }

                    }

                }(document, Math);
                break;
            case "/css3":
                break;
            case "/js":
                break;
        }
    });
}]);
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