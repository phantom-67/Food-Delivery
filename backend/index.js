// 0) To start backend server we need to do nodemon index.js
// 1) Go to express.js {https://expressjs.com/en/starter/hello-world.html} and copy the code
// 2) Change the port number according to need
// 3) to verify open browser --> in url search localhost:4000
// 4) import mongoose
// 5) app.use('/api', require("./Routes/CreateUser")) this line acts as middle ware from express.js
// 6) Then we allowed the cross origin by creating app.use (we are creeating a middle ware)
// 7) we cretaed a route for DisplayData and created a file inside routes 
// 8) then we created api route for OrderData and go to OrderData.js

/*
const express = require('express')
const app = express()
const port = 4000
const Mongodb = require("./db")

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000", "Access-Control-Allow-Origin", "https://phantom-67.github.io");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

// const allowedOrigins = ["http://localhost:3000", "https://phantom-67.github.io"];

// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

Mongodb().then(() => {
  app.use(express.json());
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.use('/api', require("./Routes/CreateUser"))
  app.use('/api', require("./Routes/DisplayData"))
  app.use('/api', require("./Routes/OrderData"))
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
}).catch(error => {
  console.error("Error initializing server:", error);
});

*/

// Working cros


const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 4000;
const Mongodb = require('./db');

// Use CORS middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://phantom-67.github.io'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

Mongodb().then(() => {
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.use('/api', require('./Routes/CreateUser'));
  app.use('/api', require('./Routes/DisplayData'));
  app.use('/api', require('./Routes/OrderData'));

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}).catch(error => {
  console.error('Error initializing server:', error);
});


//  new cors
/*
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;
const Mongodb = require("./db");

// CORS configuration
const corsOptions = {
  origin: '*', // Allows all origins. Change this to specific domains if needed.
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allows specific methods
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization', // Allows specific headers
  credentials: true // Allows credentials
};

app.use(cors(corsOptions));

// Connect to MongoDB
Mongodb().then(() => {
  app.use(express.json());

  // Sample route
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  // API routes
  app.use('/api', require("./Routes/CreateUser"));
  app.use('/api', require("./Routes/DisplayData"));
  app.use('/api', require("./Routes/OrderData"));

  // Start server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(error => {
  console.error("Error initializing server:", error);
});
*/