app.controller("homeController",["$scope","$http",function($scope,$http) {

   /* $http.get("/api/values").then(function(result) {
        $scope.values = result.data;
    });*/

    $scope.message = "Jamz App Homepage!";
    console.log($scope.message);
}]);