import axios from 'axios';

const $host = axios.create({
    baseURL: 'http://localhost:5001/'
})


const $authHost = axios.create({
    baseURL: 'http://localhost:5001/'
})

const authInterceptor = config => {
    config.headers.authorization = `Baerer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost
}