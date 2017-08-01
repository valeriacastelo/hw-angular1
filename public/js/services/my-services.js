/**
 * Created by Valeria on 01/08/2017.
 */

angular.module('myServices', ['ngResource'])
       .factory('photosResource', function($resource) {
           return $resource('/v1/fotos/:fotoId', null, {
               'update' : {
                   method: 'PUT'
               }
           });

       });