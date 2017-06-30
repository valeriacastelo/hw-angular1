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

       });