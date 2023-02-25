function ConvertHandler() {
  
  this.getNum = function(input) {
    console.log("getNum has been called")
    //This is a regex to find any letter
    const letterCheck = /[a-zA-Z]/;

    //The input is searched and the
    //index of the first letter is returned
    const indexOfFirstLetter = input.search(letterCheck);

    //The second is the number to be converted
    let result = input.substring(0,indexOfFirstLetter);

    if (result == ''){
          console.log('number is correct when left blank', result)
          result = 1;
          return result;
        } 

    //Check for double fractions
    const regex = /\//g;
    const regexTest = result.match(regex);
    console.log("regexTest is", regexTest);

    if (regexTest == null ) {
        result = eval(result); 
        return result;
      } 
    
    if (regexTest.length > 1) {
        result = "error";
        return result;
    }
    
    result = eval(result);
    return result;
    
  };
  
  this.getUnit = function(input) {
    //This is a regex to find any letter
    const letterCheck = /[a-zA-Z]/;

    //The input is searched and the
    //index of the first letter is returned
    const indexOfFirstLetter = input.search(letterCheck);

    //The unit is defined by slicing from the first letter
    let result = input.slice(indexOfFirstLetter).toLowerCase();
    
    if (result == 'l') {
      result = 'L';
    }

    //A switch statement to check for values
    switch(result) {
      case "gal":
        return result;
        break;
      case "L":
        return result;
        break;
      case "mi":
        return result;
        break;
      case "km":
        return result;
        break;
      case "lbs":
        return result;
        break;
      case "kg":
        return result;
        break;
      default:
        result = "error"
        return result;
    }

  };
  
  this.getReturnUnit = function(initUnit) {
    //make matching easier by using lowercase
    const initUnitLower = initUnit.toLowerCase();
    let result;

    //Switch statement logic for the return unit
    switch(initUnitLower) {
      case "gal":
        result = "L"
        break;
      case "l":
        result = "gal"
        break;
      case "mi":
        result = "km"
        break;
      case "km":
        result = "mi"
        break;
      case "lbs":
        result = "kg"
        break;
      case "kg":
        result = "lbs"
        break;
      case "error":
        result = "error"
        break;
      default:
        result = "error"
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    //make matching easier by using lowercase
    const match = unit.toLowerCase();
    
    let result;

    switch(match) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "error":
        result = "error";
        break;
      default:
        result = "error";
    }
    console.log("spell out unit is", result)
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    //make matching easier by using lowercase
    const match = initUnit.toLowerCase();

    console.log("conversion has been called with:",{initNum: initNum, initUnit: match})
    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    //Switch statement logic for the conversion
    switch(match) {
      case "gal":
        result = +initNum * galToL
        break;
      case "l":
        result = +initNum / galToL
        break;
      case "mi":
        result = +initNum * miToKm
        break;
      case "km":
        result = +initNum / miToKm
        break;
      case "lbs":
        result = +initNum * lbsToKg
        break;
      case "kg":
        result = +initNum / lbsToKg
        break;
      case "error":
        result = "error";
        break;
      default:
        result = "error"
    }
    console.log("convert is", result)
    
    if (result == "error") {
      return result;
    } else {
    return result.toFixed(5);
    }
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    let result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
    
    return result;
  };
  
}

module.exports = ConvertHandler;
