const nearEarthObjects = require('./nasa_near_earth_object_API.json');
// The object in the nasa_near_earth_object_API.json is a copy of real API response from the NASA Near-Earth Object API.
// Find the following from the API:

// Total Count ---------------------------------------------
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count.
//console.log(nearEarthObjects.element_count)

// Averages ------------------------------------------------
// 2. What was the average absolute magnitude of all the near earth objects in this data set? Return the average absolute_magnitude_h.
// Hint - you can achieve this multiple ways, but the reduce method can be a little-known but cool way to find averages. To do it though, you'll need to use the initial_value argument
// For some extra challenge try using reduce with the initial setting argument. To learn more about it, take a look at this page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const twoArrays = nearEarthObjects.near_earth_objects["2019-12-02"].concat(nearEarthObjects.near_earth_objects["2019-12-01"])
const avg = twoArrays.reduce((acc,curr,number,whole )=> {
       return acc + curr.absolute_magnitude_h / whole.length
    }
,0)
//console.log(avg)

// Hazardous -----------------------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous
const danger = twoArrays.filter(item => item.is_potentially_hazardous_asteroid===true )
const dangerObj = danger.map(dan => `
id: ${dan.id}, 
name:${dan.name}, 
max size:${dan.estimated_diameter.miles.estimated_diameter_max}
`)
//console.log(dangerObj)

// Too Close for Comfort -----------------------------------
// 4. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles
const lessThanThat = twoArrays.filter(item => item.close_approach_data[0].miss_distance.miles <900000)
const selectedLess = lessThanThat.map(sel => `id: ${sel.id}, name: ${sel.name}, max size: ${sel.estimated_diameter.miles.estimated_diameter_max}`)
console.log(selectedLess)
// Alert ---------------------------------------------------
// 5. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth. 

