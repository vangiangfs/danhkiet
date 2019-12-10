import global from './global';

export function submitRegister( type, mobile, password, email, first_name, last_name, birthday, gender, address ) {
    let url;
    url = global.BASE_URL+`/do_register.api?type=${type}&mobile=${mobile}&password=${password}&email=${email}&first_name=${first_name}&last_name=${last_name}&last_name=${last_name}&birthday=${birthday}&gender=${gender}&address=${address}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};

export function submitLogin (username, password, token) {
    let url;
    url = global.BASE_URL+`/do_login.api?username=${username}&password=${password}&token=${token}`;
    console.log(url);
    return fetch(url)
    .then(res => res.json());
};