const Documenu = require('documenu')
Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Mix of Required and Optional Parameters
const exampleParams = {
  lat: 40.68919, //REQUIRED
  lon: -73.992378, //REQUIRED
  distance: 1, //REQUIRED
  size: 5, //OPTIONAL
  search: 'pizza', //OPTIONAL
  cuisine: 'italian', //OPTIONAL
}


// Get Single Restaurant
Documenu.MenuItems.searchGeo(exampleParams)
.then(result => {
  console.log(JSON.stringify(result, 2, 2))
})

// RESPONSE
// {
//   "totalResults": 50,
//   "page": 1,
//   "total_pages": 11,
//   "more_pages": true,
//   "data": [
//     {
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11201",
//         "street": "139 Court St",
//         "formatted": "139 Court St Brooklyn, NY 11201"
//       },
//       "cuisines": [
//         "Italian",
//         "Pizza"
//       ],
//       "geo": {
//         "lat": 40.689449,
//         "lon": -73.99235
//       },
//       "item_id": "8891828877411758087",
//       "menu_item_description": "(1) 16 inch pizza pie, 24 wings and (1) 2 liter soda",
//       "menu_item_name": "AFC Special",
//       "menu_item_pricing": [
//         {
//           "price": 35.95,
//           "currency": "USD",
//           "priceString": "$35.95"
//         }
//       ],
//       "menu_item_price": 35.95,
//       "price_range": "$",
//       "restaurant_hours": "Mon-Sat: 11am-10pm Sun: 12pm-10pm",
//       "restaurant_id": 4068944973992350,
//       "restaurant_name": "Pronto Pizza",
//       "restaurant_phone": "(718) 522-2225",
//       "subsection": "Game Day Specials!",
//       "subsection_description": ""
//     },
//     {
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11201",
//         "street": "139 Court St",
//         "formatted": "139 Court St Brooklyn, NY 11201"
//       },
//       "cuisines": [
//         "Italian",
//         "Pizza"
//       ],
//       "geo": {
//         "lat": 40.689449,
//         "lon": -73.99235
//       },
//       "item_id": "4171988074896997254",
//       "menu_item_description": "(2) 16 inch pizza pies, 24 wings, (2) mozzarella cheese sticks and (1) 2 liter soda",
//       "menu_item_name": "NFC Special",
//       "menu_item_pricing": [
//         {
//           "price": 59.95,
//           "currency": "USD",
//           "priceString": "$59.95"
//         }
//       ],
//       "menu_item_price": 59.95,
//       "price_range": "$",
//       "restaurant_hours": "Mon-Sat: 11am-10pm Sun: 12pm-10pm",
//       "restaurant_id": 4068944973992350,
//       "restaurant_name": "Pronto Pizza",
//       "restaurant_phone": "(718) 522-2225",
//       "subsection": "Game Day Specials!",
//       "subsection_description": ""
//     },
//     {
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11201",
//         "street": "193 Atlantic Ave",
//         "formatted": "193 Atlantic Ave Brooklyn, NY 11201"
//       },
//       "cuisines": [
//         "Bakery & Pastries",
//         "Breakfast",
//         "Healthy",
//         "Italian",
//         "Pasta",
//         "Pizza",
//         "Salads",
//         "Sandwiches"
//       ],
//       "geo": {
//         "lat": 40.690063,
//         "lon": -73.993168
//       },
//       "item_id": "10260150626174428380",
//       "menu_item_description": "Deep dish square style pizza with tomato sauce, mozzarella and parmesan.",
//       "menu_item_name": "Pizza Slice",
//       "menu_item_pricing": [
//         {
//           "price": 2.75,
//           "currency": "USD",
//           "priceString": "$2.75"
//         }
//       ],
//       "menu_item_price": 2.75,
//       "price_range": "$$",
//       "restaurant_hours": "Daily: 8am-10pm",
//       "restaurant_id": 4069006373993168,
//       "restaurant_name": "Catania Cafe",
//       "restaurant_phone": "(718) 522-2880",
//       "subsection": "Pizza Siciliana",
//       "subsection_description": ""
//     },
//     {
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11201",
//         "street": "193 Atlantic Ave",
//         "formatted": "193 Atlantic Ave Brooklyn, NY 11201"
//       },
//       "cuisines": [
//         "Bakery & Pastries",
//         "Breakfast",
//         "Healthy",
//         "Italian",
//         "Pasta",
//         "Pizza",
//         "Salads",
//         "Sandwiches"
//       ],
//       "geo": {
//         "lat": 40.690063,
//         "lon": -73.993168
//       },
//       "item_id": "14130351001044961966",
//       "menu_item_description": "Deep dish square style pizza with tomato sauce, mozzarella and parmesan.",
//       "menu_item_name": "Whole Pizza",
//       "menu_item_pricing": [
//         {
//           "price": 14,
//           "currency": "USD",
//           "priceString": "$14.00"
//         }
//       ],
//       "menu_item_price": 14,
//       "price_range": "$$",
//       "restaurant_hours": "Daily: 8am-10pm",
//       "restaurant_id": 4069006373993168,
//       "restaurant_name": "Catania Cafe",
//       "restaurant_phone": "(718) 522-2880",
//       "subsection": "Pizza Siciliana",
//       "subsection_description": ""
//     },
//     {
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11201",
//         "street": "193 Atlantic Ave",
//         "formatted": "193 Atlantic Ave Brooklyn, NY 11201"
//       },
//       "cuisines": [
//         "Bakery & Pastries",
//         "Breakfast",
//         "Healthy",
//         "Italian",
//         "Pasta",
//         "Pizza",
//         "Salads",
//         "Sandwiches"
//       ],
//       "geo": {
//         "lat": 40.690063,
//         "lon": -73.993168
//       },
//       "item_id": "517859032481547576",
//       "menu_item_description": "Deep dish style pizza with tomato sauce, mozzarella, olives, scallions and peas.",
//       "menu_item_name": "Fattoressa Pizza Slice",
//       "menu_item_pricing": [
//         {
//           "price": 3.75,
//           "currency": "USD",
//           "priceString": "$3.75"
//         }
//       ],
//       "menu_item_price": 3.75,
//       "price_range": "$$",
//       "restaurant_hours": "Daily: 8am-10pm",
//       "restaurant_id": 4069006373993168,
//       "restaurant_name": "Catania Cafe",
//       "restaurant_phone": "(718) 522-2880",
//       "subsection": "Pizza Siciliana",
//       "subsection_description": ""
//     }
//   ],
//   "numResults": 5
// }
