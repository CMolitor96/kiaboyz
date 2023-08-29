const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();
const routes = require('./routes');
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });



app.use(routes);

app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));



