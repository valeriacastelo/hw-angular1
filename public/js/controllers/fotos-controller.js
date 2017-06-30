angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];

    $http.get('/v1/fotos')
         .success(function (data) {
             $scope.fotos = data;
         })
        .error(function(erro) {
            console.log(erro);
        });

});