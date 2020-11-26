const Documenu = require('documenu')
Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Mix of Required and Optional Parameters
const exampleParams = {
  lat: 40.68919, //REQUIRED
  lon: -73.992378, //REQUIRED
  distance: 1, //REQUIRED
  size: 2 //OPTIONAL
}


// Get Single Restaurant
Documenu.Restaurants.searchGeo(exampleParams)
.then(result => {
  console.log(JSON.stringify(result, 2, 2))
})

// RESPONSE
// {
//   "totalResults": 978,
//   "page": 1,
//   "total_pages": 490,
//   "more_pages": true,
//   "data": [
//     {
//       "restaurant_name": "Bareburger - Cobble Hill",
//       "restaurant_phone": "(347) 529-6673",
//       "restaurant_website": "",
//       "hours": "Sun-Wed: 11am-10pm Thu-Sat: 11am-11pm",
//       "price_range": "$$",
//       "restaurant_id": 4068919073992378,
//       "cuisines": [
//         "Burgers",
//         "Local/Organic",
//         "Salads",
//         "Wild Game"
//       ],
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11201",
//         "street": "149 Court St",
//         "formatted": "149 Court St Brooklyn, NY 11201"
//       },
//       "geo": {
//         "lat": 40.68919,
//         "lon": -73.992378
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:51:53.082Z"
//     },
//     {
//       "restaurant_name": "Yemen Cuisine",
//       "restaurant_phone": "(718) 624-9325",
//       "restaurant_website": "",
//       "hours": "",
//       "price_range": "$$",
//       "restaurant_id": 4068920773992468,
//       "cuisines": [
//         "Middle Eastern"
//       ],
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11201",
//         "street": "145 Court St",
//         "formatted": "145 Court St Brooklyn, NY 11201"
//       },
//       "geo": {
//         "lat": 40.689207,
//         "lon": -73.992468
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:50:25.774Z"
//     }
//   ],
//   "numResults": 2
// }
