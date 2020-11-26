const Documenu = require('../..')
// const Documenu = require('documenu')
Documenu.configure('881b49aa5ac1cb74d98d25106dcd2f7d')
// Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Example Restaurant ID
const exampleRestaurantID = '4072702673999819'

// Optional Parameters
const exampleOptionalParams = {
  size: 3,
  page: 1
}

// Get Single Restaurant
Documenu.Restaurants.getMenuItems(exampleRestaurantID, exampleOptionalParams)
.then(result => {
  console.log(JSON.stringify(result, 2, 2))
})

// RESPONSE
// {
//   "totalResults": 290,
//   "page": "1",
//   "total_pages": 97,
//   "more_pages": true,
//   "data": [
//     {
//       "address": {
//         "city": "New York",
//         "state": "NY",
//         "postal_code": "10012",
//         "street": "490 Laguardia Pl",
//         "formatted": "490 Laguardia Pl New York, NY 10012"
//       },
//       "cuisines": [
//         "American",
//         "Burgers",
//         "Diner"
//       ],
//       "geo": {
//         "lat": 40.727026,
//         "lon": -73.999819
//       },
//       "item_id": "11979783975567597914",
//       "menu_item_description": "",
//       "menu_item_name": "Regular Iced Cofee",
//       "menu_item_pricing": [
//         {
//           "price": 3,
//           "currency": "USD",
//           "priceString": "$3.00"
//         }
//       ],
//       "menu_item_price": 3,
//       "price_range": "$$",
//       "restaurant_hours": "Daily: 6am-11pm",
//       "restaurant_id": 4072702673999819,
//       "restaurant_name": "Silver Spurs",
//       "restaurant_phone": "(212) 228-2333",
//       "subsection": "Beverages",
//       "subsection_description": ""
//     },
//     {
//       "address": {
//         "city": "New York",
//         "state": "NY",
//         "postal_code": "10012",
//         "street": "490 Laguardia Pl",
//         "formatted": "490 Laguardia Pl New York, NY 10012"
//       },
//       "cuisines": [
//         "American",
//         "Burgers",
//         "Diner"
//       ],
//       "geo": {
//         "lat": 40.727026,
//         "lon": -73.999819
//       },
//       "item_id": "9372172870336282413",
//       "menu_item_description": "",
//       "menu_item_name": "Decafe Iced Coffee",
//       "menu_item_pricing": [
//         {
//           "price": 3,
//           "currency": "USD",
//           "priceString": "$3.00"
//         }
//       ],
//       "menu_item_price": 3,
//       "price_range": "$$",
//       "restaurant_hours": "Daily: 6am-11pm",
//       "restaurant_id": 4072702673999819,
//       "restaurant_name": "Silver Spurs",
//       "restaurant_phone": "(212) 228-2333",
//       "subsection": "Beverages",
//       "subsection_description": ""
//     },
//     {
//       "address": {
//         "city": "New York",
//         "state": "NY",
//         "postal_code": "10012",
//         "street": "490 Laguardia Pl",
//         "formatted": "490 Laguardia Pl New York, NY 10012"
//       },
//       "cuisines": [
//         "American",
//         "Burgers",
//         "Diner"
//       ],
//       "geo": {
//         "lat": 40.727026,
//         "lon": -73.999819
//       },
//       "item_id": "5881151510683832077",
//       "menu_item_description": "",
//       "menu_item_name": "Mochachino",
//       "menu_item_pricing": [
//         {
//           "price": 5,
//           "currency": "USD",
//           "priceString": "$5.00"
//         }
//       ],
//       "menu_item_price": 5,
//       "price_range": "$$",
//       "restaurant_hours": "Daily: 6am-11pm",
//       "restaurant_id": 4072702673999819,
//       "restaurant_name": "Silver Spurs",
//       "restaurant_phone": "(212) 228-2333",
//       "subsection": "Beverages",
//       "subsection_description": ""
//     }
//   ],
//   "numResults": 3
// }
