'use strict'

angular.module('myApp.colorpicker', [])
  .component('colorpicker', {
    bindings: {
      r: '@',
      g: '@',
      b: '@',
      a: '@'
    },
    template: '<div style="height: 100px; background-color: rgba({{$ctrl.r}}, {{$ctrl.g}}, {{$ctrl.b}}, {{$ctrl.a}});"></div><input type="range" ng-model="$ctrl.r" max="255"><input type="range" ng-model="$ctrl.g" max="255"><input type="range" ng-model="$ctrl.b" max="255"><input type="range" ng-model="$ctrl.a" max="1" step="0.01">'
  })
