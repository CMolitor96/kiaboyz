const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const { carMake, carYear, carInfo } = require('./controllers/queries');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}
app.use(routes);

app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
// carInfo(2011, 'Kia', 'Forte');



