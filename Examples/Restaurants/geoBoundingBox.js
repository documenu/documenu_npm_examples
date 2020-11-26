const Documenu = require('documenu')
Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Mix of Required and Optional Parameters
const exampleParams = {
  top_left: '40.7636412,-74.016265', //REQUIRED | string | Top Left coordinates of Bounding Box in lat,lon
  bottom_right: '40.706929,-73.96682', //REQUIRED | string | Bottom Right coordinates of Bounding Box in lat,lon
  size: 2 //OPTIONAL
  // page: 1 | Number | OPTIONAL,
  // fullmenu: | Boolean | OPTIONAL
}


// Get Single Restaurant
Documenu.Restaurants.geoBoundingBox(exampleParams)
.then(result => {
  console.log(JSON.stringify(result, 2, 2))
})

// RESPONSE
// {
//   "totalResults": 162,
//   "page": "1",
//   "total_pages": 55,
//   "more_pages": true,
//   "data": [
//     {
//       "restaurant_name": "Let's Thai",
//       "restaurant_phone": "(562) 324-9683",
//       "restaurant_website": "http://www.letsthaifoodtruck.com",
//       "hours": "",
//       "price_range": "$",
//       "restaurant_id": 33965292118151460,
//       "cuisines": [
//         "Thai"
//       ],
//       "address": {
//         "city": "Bell Gardens",
//         "state": "CA",
//         "postal_code": "90210",
//         "street": "Location Varies",
//         "formatted": "Location Varies Bell Gardens, CA 90210"
//       },
//       "geo": {
//         "lat": 33.965292,
//         "lon": -118.151459
//       },
//       "menus": [],
//       "last_updated": "2020-11-26T10:11:02.297Z"
//     },
//     {
//       "restaurant_name": "Sayuri",
//       "restaurant_phone": "(310) 246-9031",
//       "restaurant_website": "",
//       "hours": "Mon-Sat: 11:30am-9pm",
//       "price_range": "$$",
//       "restaurant_id": 34068849118405972,
//       "cuisines": [
//         "Japanese",
//         "Sushi"
//       ],
//       "address": {
//         "city": "Beverly Hills",
//         "state": "CA",
//         "postal_code": "90210",
//         "street": "456 N Bedford Dr",
//         "formatted": "456 N Bedford Dr Beverly Hills, CA 90210"
//       },
//       "geo": {
//         "lat": 34.068849,
//         "lon": -118.405972
//       },
//       "menus": [],
//       "last_updated": "2020-11-26T10:11:52.462Z"
//     },
//     {
//       "restaurant_name": "Good 2 Go",
//       "restaurant_phone": "(310) 447-1624",
//       "restaurant_website": "",
//       "hours": "Mon-Fri: 8:30am-3pm",
//       "price_range": "$",
//       "restaurant_id": 34075004118393670,
//       "cuisines": [
//         "Sandwiches"
//       ],
//       "address": {
//         "city": "Beverly Hills",
//         "state": "CA",
//         "postal_code": "90210",
//         "street": "345 N Maple Dr",
//         "formatted": "345 N Maple Dr Beverly Hills, CA 90210"
//       },
//       "geo": {
//         "lat": 34.075004,
//         "lon": -118.393672
//       },
//       "menus": [],
//       "last_updated": "2020-11-26T10:11:52.611Z"
//     }
//   ],
//   "numResults": 3
// }
// dom@DG-MBP Restaurants % node geoBoundingBox.js
// {
//   "totalResults": 9909,
//   "page": 1,
//   "total_pages": 4955,
//   "more_pages": true,
//   "data": [
//     {
//       "restaurant_name": "18 Bakery & Kitchen",
//       "restaurant_phone": "(718) 837-8818",
//       "restaurant_website": "",
//       "hours": "",
//       "price_range": "",
//       "restaurant_id": 4074536374008127,
//       "cuisines": [
//         "Chinese"
//       ],
//       "address": {
//         "city": "BROOKLYN",
//         "state": "NY",
//         "postal_code": "11204",
//         "street": "7218 18th Ave",
//         "formatted": "7218 18th Ave BROOKLYN, NY 11204"
//       },
//       "geo": {
//         "lat": 40.745363,
//         "lon": -74.008127
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:54:00.343Z"
//     },
//     {
//       "restaurant_name": "Barano",
//       "restaurant_phone": "(347) 297-0013",
//       "restaurant_website": "",
//       "hours": "",
//       "price_range": "",
//       "restaurant_id": 4071035473967804,
//       "cuisines": [],
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11249",
//         "street": "26 Broadway",
//         "formatted": "26 Broadway Brooklyn, NY 11249"
//       },
//       "geo": {
//         "lat": 40.710354,
//         "lon": -73.967804
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:54:24.981Z"
//     }
//   ],
//   "numResults": 2
// }
