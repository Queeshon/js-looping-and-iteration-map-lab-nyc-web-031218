function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    sd = driver.split(" ")
    return { firstName: sd[0], lastName: sd.pop() }
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
