const getDevices = () => fetch('/api/device')
    .then(res => res.json());

export {getDevices};
