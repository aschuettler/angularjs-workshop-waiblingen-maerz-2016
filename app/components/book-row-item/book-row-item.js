'use strict'

angular.module('myApp.bookRowItem', [])
  .component('bookRowItem', {
    bindings: {
      book: '='
    },
    templateUrl: 'components/book-row-item/book-row-item.html'
  })
