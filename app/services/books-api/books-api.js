'use strict'

angular.module('myApp.booksApi', [])
  .factory('booksApi', function ($http, $q) {

    var baseUrl = 'http://bookmonkey-api.angularjs.de/books/'

    var books = []

    function _extractData (response) {
      return response.data
    }

    function loadByIsbn (isbn) {
      for (var i = 0; i < books.length; i++) {
        var book = books[i]
        if (book.isbn === isbn) {
          return $q.resolve(book)
        }
      }

      /* ES2015
       * for (var book of books) {
       *   if (book.isbn === isbn) {
       *     return $q.resolve(book)
       *   }
       * }
       */

      return $http.get(baseUrl + isbn)
        .then(_extractData)
    }

    function loadAll () {
      if (books.length > 0) {
        return $q.resolve(books)
      } else {
        return $http.get(baseUrl)
          .then(_extractData)
          .then(function (booksData) {
            books = booksData
            return booksData
          })
      }
    }

    return {
      loadByIsbn: loadByIsbn,
      loadAll: loadAll
    }
  })
