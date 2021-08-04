const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const pug = require('pug');

// Create the server
const app = express();

// Configuration
app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/ping', (req, res) => {
    res.send('OK');
});

app.post('/', (req, res) => {

    const { template, data } = req.body;
    console.log(template);
    console.log(data);

    const generated = pug.render(template, data);
    console.log(generated);

    res.send(generated);

});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is up and running on port: ${port}`);
});
