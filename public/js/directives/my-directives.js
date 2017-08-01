/**
 * Created by Valeria on 30/06/2017.
 */

angular.module('myDirectives', [])
       .directive('myPanel', function () {
           var ddo = {};

           ddo.restrict = "AE";
           ddo.scope = {
               titulo: '@'

           };

           ddo.transclude = true;

           ddo.templateUrl = 'js/directives/my-panel.html';

           return ddo;

       })
    .directive('myPhoto', function () {
        var ddo = {};

        ddo.restrict = "E";
        ddo.scope = {
            titulo: '@',
            url: '@'

        };

        ddo.templateUrl = 'js/directives/my-photo.html';

        return ddo;

    })
    .directive('myDangerButton', function() {
        var ddo = {};

        ddo.restrict = 'E';
        ddo.scope = {
            nome: '@',
            acao: '&'
        };

        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    });