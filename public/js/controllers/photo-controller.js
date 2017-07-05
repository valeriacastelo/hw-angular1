/**
 * Created by Valeria on 04/07/2017.
 */

angular.module('alurapic').controller('PhotoController', function($scope, $http) {

    $scope.photo = {};
    $scope.message = '';

    $scope.submeter = function() {
        if ($scope.form.$valid) {
            $http.post('/v1/fotos', $scope.photo)
                .success(function () {
                    $scope.photo = {};
                    $scope.message = 'Foto cadastrada com sucesso';
                })
                .error(function (error) {
                    console.log(error);
                    $scope.message = 'Não foi possível cadastrar a foto';
                });
        } else {
            console.log("invalido");
        }
    };

});