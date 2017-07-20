/**
 * Created by Valeria on 04/07/2017.
 */

angular.module('alurapic').controller('PhotoController', function($scope, $http, $window, $routeParams) {

    $scope.photo = {};
    $scope.message = '';

    if ($routeParams.photoId) {
        $http.get('/v1/fotos/' + $routeParams.photoId)
            .success(function (data) {
                $scope.photo = data;
            })
            .error(function(error) {
                console.log(error);
               // $window.location.href = "/";
            });
    }

    $scope.submeter = function() {
        if ($scope.photoForm.$valid) {

            if($routeParams.photoId) {
                $http.put('/v1/fotos/' + $scope.photo._id, $scope.photo)
                    .success(function (data) {
                        console.log(data)
                        $scope.message = 'Foto atualizada com sucesso';
                        //$window.location.href = "/";
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.message = 'Não foi possível atualizar a foto';
                    });

            } else {
                $http.post('/v1/fotos', $scope.photo)
                    .success(function () {
                        $scope.message = 'Foto cadastrada com sucesso';
                        $window.location.href = "/";
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.message = 'Não foi possível cadastrar a foto';
                    });
            }
        } else {
            console.log("invalido");
        }
    };

});