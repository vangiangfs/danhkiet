import global from './global';

export function getCountries(){
    let url;
    url = global.BASE_URL+`/get_countries.api`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function getCities(country_id){
    let url;
    url = global.BASE_URL+`/get_cities.api?country_id=${country_id}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function getDistricts(city_id){
    let url;
    url = global.BASE_URL+`/get_districts.api?city_id=${city_id}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function getWards(district_id){
    let url;
    url = global.BASE_URL+`/get_wards.api?district_id=${district_id}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};