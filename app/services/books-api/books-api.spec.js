'use strict'

/* global describe it expect beforeEach afterEach inject */

describe('A booksApi service', function () {

  var booksApi, $httpBackend

  var mockBooks

  beforeEach(module('myApp.booksApi'))

  beforeEach(inject(function (_booksApi_, _$httpBackend_) {
    booksApi = _booksApi_
    $httpBackend = _$httpBackend_
  }))

  beforeEach(function () {
    mockBooks = [{isbn: '123', title: 'Wump!'}]

    $httpBackend.whenGET('http://bookmonkey-api.angularjs.de/books/')
      .respond(mockBooks)
  })

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation()
    $httpBackend.verifyNoOutstandingRequest()
  })

  it('should work', function () {
    expect(true).toBe(true)
  })

  it('should be defined', function () {
    expect(booksApi).toBeDefined()
  })

  describe('with a public API', function () {
    it('should have a loadAll()', function () {
      expect(booksApi.loadAll).toBeDefined()
      expect(typeof booksApi.loadAll).toBe('function')
    })
    it('should have a loadByIsbn()', function () {
      expect(booksApi.loadByIsbn).toBeDefined()
      expect(typeof booksApi.loadByIsbn).toBe('function')
    })
  })

  describe('with a loadAll()', function () {
    it('should return a promise', function () {
      var promise = booksApi.loadAll()
      $httpBackend.flush()
      expect(typeof promise.then).toBe('function')
    })

    it('should promise to return the servers response', function () {
      var promise = booksApi.loadAll()

      var books

      promise.then(function (booksArray) {
        books = booksArray
      })
      $httpBackend.flush()
      expect(books).toEqual(mockBooks)
    })

    it('should send a HTTP GET to the right URL', function () {
      $httpBackend.expectGET('http://bookmonkey-api.angularjs.de/books/')
      booksApi.loadAll()
      $httpBackend.flush()
    })
  })
})
