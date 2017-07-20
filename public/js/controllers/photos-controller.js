/**
 * Created by Valeria on 30/06/2017.
 */


angular.module('alurapic').controller('PhotosController', function($scope, $http) {

    $scope.photos = [];
    $scope.filterPhoto = '';
    $scope.message = '';

    $http.get('/v1/fotos')
        .success(function (data) {
            $scope.photos = data;
        })
        .error(function(erro) {
            console.log(erro);
        });

    $scope.remove = function (photo) {
        $http.delete('/v1/fotos/' + photo._id)
            .success(function (data) {
                var index = $scope.photos.indexOf(photo);
                $scope.photos.splice(index, 1);
                $scope.message = 'Foto ' + photo.titulo + ' removida com sucesso!';
            })
            .error(function(err) {
                console.log(err);
                $scope.message = 'Não foi possível apagar a foto ' + photo.titulo;
            });
    };

});