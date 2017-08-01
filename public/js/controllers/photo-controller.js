/**
 * Created by Valeria on 04/07/2017.
 */

angular.module('alurapic').controller('PhotoController', function($scope, $window, $routeParams, photosResource, photosRegister) {

    $scope.photo = {};
    $scope.message = '';

    if ($routeParams.photoId) {
        photosResource.get ({fotoId: $routeParams.photoId},
            function (data) {
                $scope.photo = data;
            },
            function(error) {
                console.log(error);
               // $window.location.href = "/";
            });
    }

    $scope.submeter = function() {
        if ($scope.photoForm.$valid) {

            photosRegister.register($scope.photo)
                .then(function(data) {
                    $scope.message = data.mensagem;
                    /*if (data.inclusao) $scope.photo = {};*/
                })
                .catch(function(error) {
                    $scope.message = error.mensagem;
                });
        } else {
            console.log("invalido");
        }
    };

});