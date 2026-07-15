const express = require('express');
const cors = require('cors');
const ConnectDB = require('../backend/src/config/db');
const Videorouter = require('../backend/src/routes/videoRoutes');



const app = express();
ConnectDB();    

app.use(express.static("public"));

app.use(cors());
app.use(express.json());

app.use('/api', Videorouter);


const port = 3000;

app.listen(port, () => {
    console.log('Server is running on port', port);
});


