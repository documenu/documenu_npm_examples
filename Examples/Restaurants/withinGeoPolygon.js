const Documenu = require('documenu')
Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Array of points in [[lat,lon]] format
const examplePoints = [[-86.19873046875,38.77121637244273],[-87.099609375,37.35269280367274],[-84.79248046875,37.21283151445594],[-82.94677734375,38.03078569382294],[-83.47412109375,38.92522904714054],[-84.6826171875,39.605688178320804],[-86.19873046875,38.77121637244273]]

// Optional Parameters
const exampleOptionalParams = {
  size: 3,
  page: 1
}


// Get Single Restaurant
Documenu.Restaurants.withinGeoPolygon(examplePoints, exampleOptionalParams)
.then(result => {
  console.log(JSON.stringify(result, 2, 2))
})

// RESPONSE
// {
//   "totalResults": 8349,
//   "page": "1",
//   "total_pages": 2784,
//   "more_pages": true,
//   "data": [
//     {
//       "restaurant_name": "Subway",
//       "restaurant_phone": "(812) 283-1131",
//       "restaurant_website": "http://www.subway.com",
//       "hours": "",
//       "price_range": "",
//       "restaurant_id": 3829531885726759,
//       "cuisines": [
//         "Sandwiches"
//       ],
//       "address": {
//         "city": "JEFFERSONVILLE",
//         "state": "IN",
//         "postal_code": "47130",
//         "street": "1710 E 10th St",
//         "formatted": "1710 E 10th St JEFFERSONVILLE, IN 47130"
//       },
//       "geo": {
//         "lat": 38.295318,
//         "lon": -85.726759
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:42:47.264Z"
//     },
//     {
//       "restaurant_name": "Penn Station East Coast Subs",
//       "restaurant_phone": "(812) 218-8400",
//       "restaurant_website": "http://www.penn-station.com",
//       "hours": "",
//       "price_range": "",
//       "restaurant_id": 3832839085711446,
//       "cuisines": [
//         "Sandwiches"
//       ],
//       "address": {
//         "city": "JEFFERSONVILLE",
//         "state": "IN",
//         "postal_code": "47130",
//         "street": "3310 E 10th St",
//         "formatted": "3310 E 10th St JEFFERSONVILLE, IN 47130"
//       },
//       "geo": {
//         "lat": 38.32839,
//         "lon": -85.711446
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:42:47.317Z"
//     },
//     {
//       "restaurant_name": "Papa John's Pizza",
//       "restaurant_phone": "(812) 282-3333",
//       "restaurant_website": "http://www.papajohns.com",
//       "hours": "",
//       "price_range": "",
//       "restaurant_id": 3829671785726279,
//       "cuisines": [
//         "American",
//         "Pizza"
//       ],
//       "address": {
//         "city": "JEFFERSONVILLE",
//         "state": "IN",
//         "postal_code": "47130",
//         "street": "1616 E 10th St",
//         "formatted": "1616 E 10th St JEFFERSONVILLE, IN 47130"
//       },
//       "geo": {
//         "lat": 38.296717,
//         "lon": -85.726279
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:42:47.376Z"
//     }
//   ],
//   "numResults": 3
// }
