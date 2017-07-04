/**
 * Created by Valeria on 30/06/2017.
 */


angular.module('alurapic').controller('PhotosController', function($scope, $http) {

    $scope.photos = [];
    $scope.filter = '';

    $http.get('/v1/fotos')
        .success(function (data) {
            $scope.photos = data;
        })
        .error(function(erro) {
            console.log(erro);
        });

});