const highFetch = (address, settings) =>
    fetch(address,
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            ...settings
        });

export {highFetch};
