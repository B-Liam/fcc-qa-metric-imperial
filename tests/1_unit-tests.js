const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test('Should accept whole number', function () {
      assert.equal(convertHandler.getNum('10gal'), '10')
    });

  test('Should accept decimal number', function () {
      assert.equal(convertHandler.getNum('10.5gal'), '10.5')
    });

  test('Should accept fractional input', function () {
      assert.equal(convertHandler.getNum('1/2gal'), '0.5')
    });

  test('Should accept fractional input with a decimal', function () {
      assert.equal(convertHandler.getNum('5/2.5gal'), '2')
    });

  test('Return an error on double fraction', function () {
      assert.equal(convertHandler.getNum('3/2/3gal'), 'error')
    });

  test('Return 1 when no numerical input', function () {
      assert.equal(convertHandler.getNum('gal'), '1')
    });

  test('Can read all the units correctly', function () {
      assert.equal(convertHandler.getUnit('3.1gal'), 'gal');
      assert.equal(convertHandler.getUnit('3.1L'), 'L');
      assert.equal(convertHandler.getUnit('3.1mi'), 'mi');
      assert.equal(convertHandler.getUnit('3.1km'), 'km');
      assert.equal(convertHandler.getUnit('3.1lbs'), 'lbs');
      assert.equal(convertHandler.getUnit('3.1kg'), 'kg')
    });

  test('When invalid unit given', function () {
      assert.equal(convertHandler.getUnit('3.1stones'), 'error');
    });

  test('Returns the correct return unit', function () {
      assert.equal(convertHandler.getReturnUnit('gal'), 'L');
      assert.equal(convertHandler.getReturnUnit('L'), 'gal');
      assert.equal(convertHandler.getReturnUnit('mi'), 'km');
      assert.equal(convertHandler.getReturnUnit('km'), 'mi');
      assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
      assert.equal(convertHandler.getReturnUnit('kg'), 'lbs')
    });

  test('Correct spelled out string', function () {
      assert.equal(convertHandler.spellOutUnit('gal'), 'gallons');
      assert.equal(convertHandler.spellOutUnit('L'), 'liters');
      assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
      assert.equal(convertHandler.spellOutUnit('km'), 'kilometers');
      assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds');
      assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms')
    });

  test('Correctly convert gallons', function () {
      assert.equal(convertHandler.convert(1, 'gal'), '3.78541');
    });
  test('Correctly convert liters', function () {
      assert.equal(convertHandler.convert(1, 'L'), '0.26417');
    });
  test('Correctly convert miles', function () {
      assert.equal(convertHandler.convert(1, 'mi'), '1.60934');
    });
  test('Correctly convert kilometers', function () {
      assert.equal(convertHandler.convert(1, 'km'), '0.62137');
    });
  test('Correctly convert pounds', function () {
      assert.equal(convertHandler.convert(1, 'lbs'), '0.45359');
    });
  test('Correctly convert kilograms', function () {
      assert.equal(convertHandler.convert(1, 'kg'), '2.20462');
    });
  

});