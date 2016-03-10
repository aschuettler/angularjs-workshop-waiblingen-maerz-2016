'use strict'

angular.module('myApp.bookEdit', [
  'myApp.booksApi'
])
  .component('bookEdit', {
    templateUrl: 'components/book-edit/book-edit.html',
    controller: function (booksApi, $routeParams) {

      booksApi.loadByIsbn($routeParams.isbn)
        .then(function (book) {
          this.book = book
        }.bind(this))

    }
  })
