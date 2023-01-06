const express = require('express');
const path = require('path');
const app = express();
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
  
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});



app.listen(PORT, () => console.log('Now listening at http://localhost:3001'));

db.query(`Select * from Hyundai where Year = '2011' and Model = 'Santa Fe' and Trim = 'SE'`, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
})
