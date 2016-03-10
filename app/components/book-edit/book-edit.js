'use strict'

angular.module('myApp.bookEdit', [
  'myApp.booksApi'
])
  .component('bookEdit', {
    templateUrl: 'components/book-edit/book-edit.html',
    controller: function (booksApi, $routeParams, $location) {

      booksApi.loadByIsbn($routeParams.isbn)
        .then(function (book) {
          this.book = book
        }.bind(this))

      this.handleSubmit = function (book) {
        booksApi.save(book)
          .then(function () {
            $location.url('/books/' + book.isbn)
          }, function (e) {
            window.alert('Nicht gespeichert:\n\nAPI sagt: ' + JSON.stringify(e))
          })
      }

    }
  })
