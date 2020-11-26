const Documenu = require('documenu')
Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Example Restaurant ID
const exampleRestaurantID = '4072702673999819'

// Get Single Restaurant
Documenu.Restaurants.get(exampleRestaurantID)
.then(result => {
  console.log(result)
})

// RESPONSE
// {
//   result: {
//     restaurant_name: 'Silver Spurs',
//     restaurant_phone: '(212) 228-2333',
//     restaurant_website: 'http://www.grubhub.com/nyc/silver-spurs-on-laguardia-place/',
//     hours: 'Daily: 6am-11pm',
//     price_range: '$$',
//     restaurant_id: 4072702673999819,
//     cuisines: [ 'American', 'Burgers', 'Diner' ],
//     address: {
//       city: 'New York',
//       state: 'NY',
//       postal_code: '10012',
//       street: '490 Laguardia Pl',
//       formatted: '490 Laguardia Pl New York, NY 10012'
//     },
//     geo: { lat: 40.727026, lon: -73.999819 },
//     menus: [ [Object] ],
//     last_updated: '2020-11-18T14:10:20.445Z'
//   }
// }
