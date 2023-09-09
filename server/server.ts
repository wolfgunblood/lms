import { app } from './app';
import connectDB from './utlis/db';

//connect to database
//create a server 

require("dotenv").config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
  
})