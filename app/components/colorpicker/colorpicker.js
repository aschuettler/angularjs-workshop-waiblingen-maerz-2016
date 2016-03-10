'use strict'

angular.module('myApp.colorpicker', [])
  .component('colorpicker', {
    bindings: {
      r: '@',
      g: '@',
      b: '@',
      a: '='
    },
    controller: function () {
      this.a = this.a || 0.5
    },
    templateUrl: 'components/colorpicker/colorpicker.html'
  })
