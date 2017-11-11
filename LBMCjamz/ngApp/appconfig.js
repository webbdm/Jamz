app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/",
            {
                templateUrl: "/ngApp/Views/home.html",
                controller: "homeController"
        })
        .when("/jamz",
            {
                templateUrl: "/ngApp/Views/jamz.html",
                controller: "jamzController"
            });
}]);


app.run(["$rootScope", "$http", "$location", function ($rootScope, $http,$location) {

   
}])