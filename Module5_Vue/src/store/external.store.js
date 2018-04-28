import { SERVER, DATA_END_POINT } from './store.dictionary';

function http(endPoint) {
    return fetch(`${endPoint}`);
}

function getExternalTodos() {
    return http(`${SERVER}/${DATA_END_POINT}`)
        .then(response => response.json());
}

export {getExternalTodos};
