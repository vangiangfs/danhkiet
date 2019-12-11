import global from './global';

export function getCities(){
    let url;
    url = global.BASE_URL+`/get_cities.api`;
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