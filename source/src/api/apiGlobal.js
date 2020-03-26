import global from './global';

export function getCountries(){
    let url;
    url = global.BASE_URL+`/get_countries.api`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function getServices(){
    let url;
    url = global.BASE_URL+`/get_services.api`;
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

export function getSearchResults(country_id, city_id, district_id, ward_id, fullname, mobile, page){
    let url;
    url = global.BASE_URL+`/get_search_results.api?country_id=${country_id}&city_id=${city_id}&district_id=${district_id}&ward_id=${ward_id}&fullname=${fullname}&mobile=${mobile}&page=${page}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function saveCallTechnical(guest_id, tech_id, country_id, city_id, district_id, ward_id, fullname, mobile, summary){
    let url;
    url = global.BASE_URL+`/save_call_technical.api?guest_id=${guest_id}&tech_id=${tech_id}&country_id=${country_id}&city_id=${city_id}&district_id=${district_id}&ward_id=${ward_id}&fullname=${fullname}&mobile=${mobile}&summary=${summary}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};