import global from './global';

export function submitRegister( version, mobile, password, email, first_name, last_name, birthday, gender, city_id, district_id, address, service_charge, machine_type, experience, work_done ) {
    let url;
    url = global.BASE_URL+`/do_register.api?version=${version}&mobile=${mobile}&password=${password}&email=${email}&first_name=${first_name}&last_name=${last_name}&last_name=${last_name}&birthday=${birthday}&gender=${gender}&city_id=${city_id}&district_id=${district_id}&address=${address}&service_charge=${service_charge}&machine_type=${machine_type}&experience=${experience}&work_done=${work_done}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function updateMember( id, mobile, email, first_name, last_name, birthday, gender, city_id, district_id, address, service_charge, machine_type, experience, work_done ) {
    let url;
    url = global.BASE_URL+`/update_member.api?id=${id}&mobile=${mobile}&email=${email}&first_name=${first_name}&last_name=${last_name}&last_name=${last_name}&birthday=${birthday}&gender=${gender}&city_id=${city_id}&district_id=${district_id}&address=${address}&service_charge=${service_charge}&machine_type=${machine_type}&experience=${experience}&work_done=${work_done}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function submitLogin (username, password, token, version, latitude, longitude) {
    let url;
    url = global.BASE_URL+`/do_login.api?username=${username}&password=${password}&token=${token}&version=${version}&latitude=${latitude}&longitude=${longitude}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function getCalledList(guest_id, page){
    let url;
    url = global.BASE_URL+`/get_called_list.api?guest_id=${guest_id}&page=${page}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function getWorksMeasure(tech_id, page){
    let url;
    url = global.BASE_URL+`/get_works_measure.api?tech_id=${tech_id}&page=${page}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function getStaticsDetail(id){
    let url;
    url = global.BASE_URL+`/get_statics_detail.api?id=${id}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function requestVIP (member_id) {
    let url;
    url = global.BASE_URL+`/request_vip.api?member_id=${member_id}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function getMemberInfo (id) {
    let url;
    url = global.BASE_URL+`/get_member_info.api?id=${id}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};