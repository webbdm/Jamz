app.controller("jamzController", ["$scope", "$http", function ($scope, $http) {

    /* $http.get("/api/values").then(function(result) {
         $scope.values = result.data;
     });*/

    let artistList = [
        {
            name: 'Aerosmith'
        },
        {
            name: 'Pearl Jam'
        }
    ];

    $scope.artists = artistList;

    $scope.message = "Jamz App!";
    console.log($scope.message);
}]);