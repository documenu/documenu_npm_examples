const Documenu = require('documenu')
Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Mix of Required and Optional Parameters
const exampleParams = {
  lat: 40.68919, //REQUIRED | Latitude of start point
  lon: -73.992378, //REQUIRED | Longitude of start point
  mode: 'driving', //REQUIRED | Mode of Transport (walking or driving)
  minutes: 1, //REQUIRED | Number of minutes in Transport
  size: 2 //OPTIONAL
}


// Get Single Restaurant
Documenu.Restaurants.withinTravelRadius(exampleParams)
.then(result => {
  console.log(JSON.stringify(result, 2, 2))
})

// RESPONSE
// {
//   "totalResults": 579,
//   "page": 1,
//   "total_pages": 290,
//   "more_pages": true,
//   "data": [
//     {
//       "restaurant_name": "Caselnova",
//       "restaurant_phone": "(718) 522-7500",
//       "restaurant_website": "",
//       "hours": "Mon-Fri: 5pm-11pm Sat: 12pm-11pm Sun: 12pm-9pm ",
//       "price_range": "$$$",
//       "restaurant_id": 4068464674002536,
//       "cuisines": [
//         "Healthy",
//         "Italian",
//         "Lunch Specials",
//         "Pasta",
//         "Pizza",
//         "Salads"
//       ],
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11231",
//         "street": "215 Columbia St",
//         "formatted": "215 Columbia St Brooklyn, NY 11231"
//       },
//       "geo": {
//         "lat": 40.684646,
//         "lon": -74.002536
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:51:04.701Z"
//     },
//     {
//       "restaurant_name": "Mitoushi",
//       "restaurant_phone": "(718) 935-1600",
//       "restaurant_website": "",
//       "hours": "Mon-Thu: 11:30am-11pm Fri: 11:30am-12am Sat: 12:30pm-12am Sun: 12:30pm-11pm",
//       "price_range": "$$",
//       "restaurant_id": 4069031073993802,
//       "cuisines": [
//         "Japanese",
//         "Sushi"
//       ],
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11201",
//         "street": "177 Atlantic Ave",
//         "formatted": "177 Atlantic Ave Brooklyn, NY 11201"
//       },
//       "geo": {
//         "lat": 40.69031,
//         "lon": -73.993802
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:51:06.151Z"
//     }
//   ],
//   "numResults": 2
// }
