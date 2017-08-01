/**
 * Created by Valeria on 04/07/2017.
 */

angular.module('alurapic').controller('PhotoController', function($scope, $window, $routeParams, photosResource) {

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

            if($routeParams.photoId) {
                photosResource.update({fotoId: $scope.photo._id}, $scope.photo,
                    function (data) {
                        console.log(data)
                        $scope.message = 'Foto atualizada com sucesso';
                        //$window.location.href = "/";
                    },
                    function (error) {
                        console.log(error);
                        $scope.message = 'Não foi possível atualizar a foto';
                    });

            } else {
                photosResource.save($scope.photo,
                        function() {
                            $scope.message = 'Foto cadastrada com sucesso';
                            $window.location.href = "/";
                        },
                        function (error) {
                            console.log(error);
                            $scope.message = 'Não foi possível cadastrar a foto';
                    });
            }
        } else {
            console.log("invalido");
        }
    };

});