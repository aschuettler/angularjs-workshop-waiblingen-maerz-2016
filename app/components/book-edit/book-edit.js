'use strict'

angular.module('myApp.bookEdit', [
  'myApp.booksApi'
])
  .component('bookEdit', {
    templateUrl: 'components/book-edit/book-edit.html',
    controller: function ($scope, $rootScope, booksApi, $routeParams, $location) {

      // this = $scope.$ctrl

      booksApi.loadByIsbn($routeParams.isbn)
        .then(function (book) {
          this.book = book
        }.bind(this))

      this.handleSubmit = function (book) {
        if (this.form.$invalid) {
          window.alert('Sende ich nicht ab, so!')
          return
        }

        booksApi.save(book)
          .then(function () {
            $location.url('/books/' + book.isbn)
          }, function (e) {
            window.alert('Nicht gespeichert:\n\nAPI sagt: ' + JSON.stringify(e))
          })
      }

    }
  })
