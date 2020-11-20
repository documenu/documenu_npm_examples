let Documenu = {}
var axios = require('axios');

Documenu.Restaurants = {}
Documenu.MenuItems = {}

const createQueryString = async(params, required = false) => {
    let keys = Object.keys(params)
    if (keys.length == 0) return '';
    if (required) {
        for (r of required) {
            if (keys.indexOf(r) == -1) {
                return false
            }
        }
    }

    let qstring = '?'
    for (k of keys) {
        qstring += (keys.indexOf(k) < keys.length - 1) ? `${k}=${params[k]}&` : `${k}=${params[k]}`;
    }
    return qstring

}


Documenu.configure = (apikey) => {
    Documenu.apikey = apikey;
    Documenu.headers = {
            'x-api-key': apikey
        }

}

Documenu.Restaurants.get = async(id) => {
    // console.log(Documenu)
    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/restaurant/${id}`,
        headers: Documenu.headers
    };

    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });

    return response.data
}

Documenu.Restaurants.getMenuItems = async(id) => {
    // console.log(Documenu)
    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/restaurant/${id}/menuitems`,
        headers: Documenu.headers
    };

    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });

    return response.data
}

Documenu.Restaurants.searchFields = async(params) => {
   
    let q = await createQueryString(params)
    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/restaurants/search/fields${q}`,
        headers: Documenu.headers
    };

    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });
    
    return response.data
}
Documenu.Restaurants.searchGeo = async(params) => {
    
    let q = await createQueryString(params, ['lat', 'lon'], ['distance'])
    
    if (q == false) {
        return 'Missing Parameters'
    }
    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/restaurants/search/geo${q}`,
        headers: Documenu.headers
    };
    
    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });
   
    return response.data
}

Documenu.Restaurants.getByState = async(state, params = {}) => {

    let q = await createQueryString(params)
    if (state == undefined || state == null) {
        return 'Missing Parameters'
    }
    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/restaurants/state/${state}${q}`,
        headers: Documenu.headers
    };
    console.log(`https://api.documenu.com/v2/restaurants/state/${state}${q}`)
    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });
    
    return response.data
}

Documenu.Restaurants.getByZipCode = async(zip, params = {}) => {

    let q = await createQueryString(params)

    if (zip == undefined || zip == null) {
        return 'Missing Parameters'
    }
    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/restaurants/zip_code/${zip}${q}`,
        headers: Documenu.headers
    };

    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });

    return response.data
}

Documenu.Restaurants.geoBoundingBox = async(params) => {

    let q = await createQueryString(params, ['top_left', 'bottom_right'])

    if (q == false) return 'Missing Parameters'

    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/restaurants/geobbox${q}`,
        headers: Documenu.headers
    };
    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });
    return response.data
}

Documenu.Restaurants.withinGeoPolygon = async(points, params=[]) => {

    let q = await createQueryString(params)

    if (points == undefined || typeof(points) != 'object') return 'Missing Parameters'

    var data = JSON.stringify({
        "points": points
    });
	let headers = Documenu.headers
	headers['Content-Type']= 'application/json';
    var config = {
        method: 'post',
        url: 'https://api.documenu.com/v2/restaurants/geopolygon',
        headers: headers,
        data: data
    };
    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });
    return response.data
}

Documenu.Restaurants.withinTravelRadius = async(params) => {

    let q = await createQueryString(params, ['lon', 'lat', 'mode', 'minutes'])

    if (q == false) return 'Missing Parameters'

    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/restaurants/distance${q}`,
        headers: Documenu.headers
    };
    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });
    return response.data
}


Documenu.MenuItems.get = async(mid) => {

    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/menuitem/${mid}`,
        headers: Documenu.headers
    };
    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });
    return response.data
}

Documenu.MenuItems.searchGeo = async(params) => {

    let q = await createQueryString(params, ['lon', 'lat', 'distance'])

    if (q == false) return 'Missing Parameters'

    var config = {
        method: 'get',
        url: `https://api.documenu.com/v2/menuitems/search/geo${q}`,
        headers: Documenu.headers
    };
    let response = await axios(config)
        .catch(function(error) {
            console.log(error);
            return error
        });
    return response.data
}

module.exports = Documenu;