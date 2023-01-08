export const carMake = (make) => {
    return fetch(`/search/make=${make}`);
};