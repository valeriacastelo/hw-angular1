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

       }).factory('photosRegister', function(photosResource, $q) {
           var service = {};

           service.register = function(photo) {
               return $q(function(resolve, reject) {
                   if(photo._id) {
                       photosResource.update({fotoId: photo._id}, photo,
                           function() {
                               resolve({
                                   mensagem: 'Sucesso no update!',
                                   inclusao: false
                               });
                           },
                           function (error) {
                               console.log(error);
                               reject({
                                   mensagem: 'Error no update'
                               });
                           });
                   } else {
                       photosResource.save(photo,
                           function() {
                               resolve({
                                   mensagem: 'Sucesso na inclusao!',
                                   inclusao: true
                               });
                           },
                           function (error) {
                               console.log(error);
                               reject({
                                   mensagem: 'Error na inclusao'
                               });
                           });
                   }
               });

           };

           return service;

       });

