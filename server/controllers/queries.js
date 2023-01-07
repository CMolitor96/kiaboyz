//do the db.query routes here, off the top of my head should make routes for after getting
//initial hyundai or kia, then querying models, then years, then the rest
const db = require('../config/connection');

module.exports = {
    carMake: function(make) {
        db.query(`Select Model from ${make}`, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                let models = new Set(results.map(element =>  element.Model));
                let modelsArray = Array.from(models);
                console.log(modelsArray);
            }
        })
    },
    carYear: function(make, model) {
        db.query(`Select Year from ${make} where Model = '${model}'`, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                let year = new Set(results.map(element =>  element.Year));
                let yearArray = Array.from(year);
                console.log(yearArray);
            }
        });
    },
    carInfo: function(year, make, model) {
        db.query(`Select * from ${make} where Model = '${model}' and Year = ${year}`, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.log(results);
            }
        })
    }
}