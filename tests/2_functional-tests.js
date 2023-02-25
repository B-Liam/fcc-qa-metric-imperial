const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
// const server = require('https://boilerplate-project-metricimpconverter.bliam14.repl.co');
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  //Test 1: Convert a valid input such as 10L: GET request to /api/convert.
  test('Convert a valid input', function () {
    chai
      .request(server)
      .get('/api/convert?input=4gal')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.body.initNum, '4', 'Response should be "4"');
        assert.equal(res.body.initUnit, 'gal', 'Response should be "gal"');
        assert.equal(res.body.returnUnit, 'L', 'Response should be "L"');
        assert.equal(res.body.returnNum, '15.14164', 'Response should be "15.14164"');
      });
      
  });

  //Test 2: Convert an invalid unit such as 32g: GET request to /api/convert
  test('Convert an invalid unit', function () {
    chai
      .request(server)
      .get('/api/convert?input=32g')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'invalid unit', 'Response should be "invalid unit"');
      });
  });

  //Test 3: Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert
  test('Convert an invalid number', function () {
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kg')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'invalid number', 'Response should be "invalid number"');
      });
  });

    //Test 4: Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert
  test('Convert an invalid number and unit', function () {
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.text, 'invalid number and unit', 'Response should be "invalid number and unit"');
      });
  });

  //Test 5: Convert with no number such as kg: GET request to /api/convert
  test('Convert with no number', function () {
    chai
      .request(server)
      .get('/api/convert?input=mi')
      .end(function (err, res) {
        assert.equal(res.status, 200, 'Response status should be 200');
        assert.equal(res.body.string, '1 miles converts to 1.60934 kilometers', 'Response should be "1 miles converts to 1.60934 kilometers"');
      });
  });


});
