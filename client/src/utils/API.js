export const searchCarMake = (make) => {
    return fetch(`/search/${make}`)
    .then(response => response.json());
};

export const searchCarYear = (make, model) => {
    return fetch(`/search/${make}/${model}`)
      .then(response => response.json());
};

export const searchCarTrim = (make, model, year) => {
    return fetch(`/search/${make}/${model}/${year}`)
      .then(response => response.json());
};

export const searchCarBodytype = (make, model, year, trim) => {
    return fetch(`/search/${make}/${model}/${year}/${trim}`)
      .then(response => response.json());
};

export const searchCarImmobilizer = (make, model, year, trim, bodytype) => {
    return fetch(`/search/${make}/${model}/${year}/${trim}/${bodytype}`)
      .then(response => response.json());
};