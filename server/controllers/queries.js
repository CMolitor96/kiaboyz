//do the db.query routes here, off the top of my head should make routes for after getting
//initial hyundai or kia, then querying models, then years, then the rest
const db = require('../config/connection');

module.exports = {
    carMake: function({params}, res) {
        db.query(`Select Model from ${params.make}`, (err, results) => {
            if (err) {
                return res.status(404).json({message: `Error getting model from ${params.make}`});
            } else {
                let models = new Set(results.map(element =>  element.Model));
                let modelsArray = Array.from(models);
                return res.json(modelsArray);
            }
        })
    },
    carYear: function({params}, res) {
        db.query(`Select Year from ${params.make} where Model = '${params.model}'`, (err, results) => {
            if (err) {
                return res.status(404).json({message: `Error getting Year from ${params.make} where model = ${params.model}`}); 
            } else {
                let year = new Set(results.map(element =>  element.Year));
                let yearArray = Array.from(year);
                if (yearArray.length === 0) {
                    return res.status(404).json({message: `There are no Years pertaining to ${params.make} where model = ${params.model}`})
                } else {
                    return res.json(yearArray);
                }
            }
        });
    },
    carInfo: function({params}, res) {
        db.query(`Select * from ${params.make} where Model = '${params.model}' and Year = ${params.year}`, (err, results) => {
            if (err) {
                return res.status(404).json({message: `Error getting cars from ${params.make} where model = ${params.model} and year = ${params.year}`});
            } else if (results.length === 0) {
                return res.status(404).json({message: `No results found for ${params.make} where model = ${params.model} and year = ${params.year}`});
            } else {
                res.json(results);
            }
        })
    }
}