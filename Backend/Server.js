const express = require ("express")
const mongoose =require ("mongoose")



const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
  });