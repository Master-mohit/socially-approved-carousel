require("dotenv").config();
const express = require('express');
const cors = require('cors');
const ConnectDB = require('./src/config/db');
const Videorouter = require('./src/routes/videoRoutes');



const app = express();
ConnectDB();    

app.use(express.static("public"));

app.use(cors());
app.use(express.json());

app.use('/api', Videorouter);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


