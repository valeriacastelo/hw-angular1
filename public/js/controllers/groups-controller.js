/**
 * Created by Valeria on 01/08/2017.
 */
angular.module('alurapic').controller('GroupsController', function($scope, $http) {

    $scope.groups = [];

    $http.get('/v1/grupos')
        .success(function(groups) {
            $scope.grupos = groups;
        })
        .error(function(error) {
            console.log(error);
        });

});