const Documenu = require('documenu')
Documenu.configure('YOUR_API_KEY_GOES_HERE')

// Example of all Params
// {
//   exact // OPTIONAL | Boolean | Search for exact match to terms
//   restaurant_name // OPTIONAL | string | Data Size of Results
//   restaurant_phone // OPTIONAL | string | Search By Phone Number
//   restaurant_website // OPTIONAL | string | Search By Website
//   address // OPTIONAL | string | Search By Address
//   state // OPTIONAL | string | Search By State Code
//   zip_code // OPTIONAL | number | Search By Zip Code
//   size // OPTIONAL | number | Data Size of Results
//   page // OPTIONAL | number | Page Through Results
//   fullmenu // OPTIONAL | Boolean | include full menus
// }

// All Optional Params for Search

const exampleParams = {
  restaurant_phone: '7183768800', //OPTIONAL
  exact: true //OPTIONAL
}


// Get Single Restaurant
Documenu.Restaurants.searchFields(exampleParams)
.then(result => {
  console.log(JSON.stringify(result, 2, 2))
})

// RESPONSE
// {
//   "totalResults": 1,
//   "page": 1,
//   "total_pages": 1,
//   "more_pages": false,
//   "data": [
//     {
//       "restaurant_name": "Dolce Vita",
//       "restaurant_phone": "(718) 376-8800",
//       "restaurant_website": "",
//       "hours": "",
//       "price_range": "$$$",
//       "restaurant_id": 4060476073969310,
//       "cuisines": [
//         "French"
//       ],
//       "address": {
//         "city": "Brooklyn",
//         "state": "NY",
//         "postal_code": "11223",
//         "street": "547 Kings Highway",
//         "formatted": "547 Kings Highway Brooklyn, NY 11223"
//       },
//       "geo": {
//         "lat": 40.60476,
//         "lon": -73.96931
//       },
//       "menus": [],
//       "last_updated": "2020-11-18T13:53:46.307Z"
//     }
//   ],
//   "numResults": 1
// }
