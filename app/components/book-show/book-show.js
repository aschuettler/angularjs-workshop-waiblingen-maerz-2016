'use strict'

function bookShow (booksApi, $routeParams) {

  booksApi.loadByIsbn($routeParams.isbn)
    .then(function (book) {
      this.book = book
    }.bind(this))

    // ES2015 .then(book => this.book = book)
}

angular.module('myApp.bookShow', [
  'myApp.booksApi'
])
  .component('bookShow', {
    templateUrl: 'components/book-show/book-show.html',
    controller: bookShow
  })
