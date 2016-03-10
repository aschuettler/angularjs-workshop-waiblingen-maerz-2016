'use strict'

angular.module('myApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>Main Page</h1>'
      })
      .when('/books', {
        template: '<book-index></book-index>'
      })

      // /books/new
      // .when('/books/new', {})

      .when('/books/:isbn', {
        template: '<book-show></book-show>'
      })
      .when('/books/:isbn/edit', {
        template: '<book-edit></book-edit>'
      })

      .otherwise('/')
  })
