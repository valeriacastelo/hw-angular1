/**
 * Created by Valeria on 30/06/2017.
 */


angular.module('alurapic').controller('PhotosController', function($scope, photosResource) {

    $scope.photos = [];
    $scope.filterPhoto = '';
    $scope.message = '';

    photosResource.query(function (data) {
            $scope.photos = data;
        },
        function(erro) {
            console.log(erro);
        });

    $scope.remove = function (photo) {
        photosResource.delete ({fotoId: photo._id},
            function () {
                var index = $scope.photos.indexOf(photo);
                $scope.photos.splice(index, 1);
                $scope.message = 'Foto ' + photo.titulo + ' removida com sucesso!';
            },
            function(err) {
                console.log(err);
                $scope.message = 'Não foi possível apagar a foto ' + photo.titulo;
            });
    };

});