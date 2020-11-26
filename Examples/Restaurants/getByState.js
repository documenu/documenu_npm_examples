const Documenu = require('documenu')
Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Example State Code
const exampleStateCode = 'NY'

// Optional Parameters
const exampleOptionalParams = {
  size: 3,
  page: 1
}

// Get Single Restaurant
Documenu.Restaurants.getByState(exampleStateCode, exampleOptionalParams)
.then(result => {
  console.log(JSON.stringify(result, 2, 2))
})

// RESPONSE
// {
//   "totalResults": 55824,
//   "page": "1",
//   "total_pages": 18609,
//   "more_pages": true,
//   "data": [
//     {
//       "restaurant_name": "Amazing Wok",
//       "restaurant_phone": "(518) 434-3946",
//       "restaurant_website": "http://www.albanytakeout.com/mnu/59/Amazing_Wok",
//       "hours": "",
//       "price_range": "$$",
//       "restaurant_id": 4265375873766550,
//       "cuisines": [
//         "Chinese"
//       ],
//       "address": {
//         "city": "ALBANY",
//         "state": "NY",
//         "postal_code": "12210",
//         "street": "267 Lark St",
//         "formatted": "267 Lark St ALBANY, NY 12210"
//       },
//       "geo": {
//         "lat": 42.653758,
//         "lon": -73.76655
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:45:20.362Z"
//     },
//     {
//       "restaurant_name": "Legend's Sports Lounge",
//       "restaurant_phone": "(518) 275-4900",
//       "restaurant_website": "http://www.legendsonlark.com",
//       "hours": "",
//       "price_range": "$$",
//       "restaurant_id": 4265293573766935,
//       "cuisines": [
//         "American",
//         "Pub Food"
//       ],
//       "address": {
//         "city": "ALBANY",
//         "state": "NY",
//         "postal_code": "12210",
//         "street": "286 Lark St",
//         "formatted": "286 Lark St ALBANY, NY 12210"
//       },
//       "geo": {
//         "lat": 42.652935,
//         "lon": -73.766935
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:45:20.378Z"
//     },
//     {
//       "restaurant_name": "Pepper Jack's",
//       "restaurant_phone": "(518) 426-5505",
//       "restaurant_website": "http://www.pepperjacksalbany.com",
//       "hours": "",
//       "price_range": "$",
//       "restaurant_id": 4267301673785619,
//       "cuisines": [
//         "American",
//         "Mexican",
//         "Sandwiches",
//         "Wraps"
//       ],
//       "address": {
//         "city": "Albany",
//         "state": "NY",
//         "postal_code": "12206",
//         "street": "192 N Allen St",
//         "formatted": "192 N Allen St Albany, NY 12206"
//       },
//       "geo": {
//         "lat": 42.673016,
//         "lon": -73.785619
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:45:20.401Z"
//     }
//   ],
//   "numResults": 3
// }
