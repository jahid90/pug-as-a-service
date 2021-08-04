const axios = require('axios');
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/hello', async (req, res) => {

    try {

        const viewTemplate = fs.readFileSync('src/views/hello.pug', 'utf8');
        console.log(viewTemplate);
        const data = {
            welcomeMessage: 'Welcome to Pug-as-a-Service',
            hail: 'SaaS'
        }

        const response = await axios.post('http://pug-service/', { template: viewTemplate, data });

        res.send(response.data);
    
    } catch (err) {
        console.error(`error: ${err.message}`);
        res.sendStatus(500);
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port: ${port}`);
});
