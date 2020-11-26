const Documenu = require('documenu')
Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Example Menu Item ID
const exampleMenuItemID = '5881151510683832077'

// Get Single Restaurant
Documenu.MenuItems.get(exampleMenuItemID)
.then(result => {
  console.log(result)
})

// RESPONSE
// {
//   result: {
//     address: {
//       city: 'New York',
//       state: 'NY',
//       postal_code: '10012',
//       street: '490 Laguardia Pl',
//       formatted: '490 Laguardia Pl New York, NY 10012'
//     },
//     cuisines: [ 'American', 'Burgers', 'Diner' ],
//     geo: { lat: 40.727026, lon: -73.999819 },
//     item_id: '5881151510683832077',
//     menu_item_description: '',
//     menu_item_name: 'Mochachino',
//     menu_item_pricing: [ [Object] ],
//     menu_item_price: 5,
//     price_range: '$$',
//     restaurant_hours: 'Daily: 6am-11pm',
//     restaurant_id: 4072702673999819,
//     restaurant_name: 'Silver Spurs',
//     restaurant_phone: '(212) 228-2333',
//     subsection: 'Beverages',
//     subsection_description: ''
//   }
// }
