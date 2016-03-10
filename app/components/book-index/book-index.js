'use strict'

function bookIndex (booksApi) {
  booksApi.loadAll()
    .then(function (booksData) {
      this.books = booksData
    }.bind(this))
}

angular.module('myApp.bookIndex', [
  'myApp.booksApi',
  'myApp.bookRowItem'
])
  .component('bookIndex', {
    templateUrl: 'components/book-index/book-index.html',
    controller: bookIndex
  })
