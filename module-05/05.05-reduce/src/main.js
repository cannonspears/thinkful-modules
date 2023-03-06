/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function squareKmTotal(parks) {
  const result = parks.reduce((total, park) => total + park.areaInSquareKm, 0);
  return result;
}

function parkNameAndState(parks) {
  return parks.reduce((result, park) => {
    result[park.name] = park.location.state;
    return result;
  }, {});
}

function parkByState(parks) {
 return parks.reduce((result, park) => {
  const state = park.location.state;
  if (!result[state]) {
    result[state] = [];
  }
  result[state].push(park);
  return result;
}, {});
}



module.exports = { squareKmTotal, parkNameAndState, parkByState };
