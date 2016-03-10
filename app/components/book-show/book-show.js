'use strict'

function bookShow ($http) {

  $http.get('http://bookmonkey-api.angularjs.de/books/978-3-89864-829-5')
    .then(function (bookResponse) {
      return bookResponse.data
    })
    .then(function (book) {
      this.book = book
    }.bind(this))

    // ES2015 .then(book => this.book = book)
}

angular.module('myApp.bookShow', [])
  .component('bookShow', {
    templateUrl: 'components/book-show/book-show.html',
    controller: bookShow
  })
