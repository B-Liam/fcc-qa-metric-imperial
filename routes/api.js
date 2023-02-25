'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;
const express = require('express');
const app = express();
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert?')
    .get((req, res) => {
      
      //Save the input query in a variable
      const input = req.query.input;

      //Pass the input to convertHandler
      //To get the number
      const number = convertHandler.getNum(input);
      
      //Pass the input to convertHandler
      //To get the units
      const unit = convertHandler.getUnit(input);

      //Get the return unit
      //By passing this to convertHandler
      const returnUnit = convertHandler.getReturnUnit(unit);

      //Do the conversion
      //By passing this to convertHandler
      const conversion = convertHandler.convert(number, unit);

      //spell out the initial unit
      //and spell out the conversion unit
      //by calling the convertHandler
      const unitLong = convertHandler.spellOutUnit(unit);
      const returnUnitLong = convertHandler.spellOutUnit(returnUnit);
      
      //Generate the string
      //By calling the convertHandler
      //With the all the relevant data generated
      const sentence = convertHandler.getString(number, unitLong, conversion, returnUnitLong);

      console.log("number is:", number);
      console.log("units is:", unit);
      console.log("return unit is:", returnUnit);
      console.log("unit long is:", unitLong);
      console.log("return unit long is:", returnUnitLong);
      console.log("conversion is:", conversion);
      console.log("sentence is:", sentence);

      
      console.log("query input is:", input);

      if (unit == "error" && isNaN(number)) {
        res.send("invalid number and unit")
        } else if (unit == "error") {
          res.send("invalid unit")
        }
          else if (isNaN(number)) {
          res.send("invalid number")
        }
          else {
          res.json({
          initNum: +number,
          initUnit: unit,
          returnNum: +conversion,
          returnUnit: returnUnit,
          string: sentence })
        }

    })

};
