// Code your solution here
const drivers = [
    { name: 'Ghasan', hometown: 'Irbid' },
    { name: 'Mohammed', hometown: 'Salt' },
    { name: 'Ali', hometown: 'Amman' },
    { name: 'Ammar', hometown: 'London' },
  ];
  

  function findMatching(driversArray, query) {
    return driversArray.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  

  function fuzzyMatch(driversArray, query) {
    return driversArray.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  function matchName(driverObjects, query) {
    return driverObjects.filter(driver =>
      driver.name.toLowerCase() === query.toLowerCase()
    );
  }