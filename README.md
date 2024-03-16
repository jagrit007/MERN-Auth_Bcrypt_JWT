# MERN Authentication
![](https://github.com/jagrit007/MERN-Auth_Bcrypt_JWT/blob/main/screenshots/Register.png)
![](https://github.com/jagrit007/MERN-Auth_Bcrypt_JWT/blob/main/screenshots/Login.png)
![](https://github.com/jagrit007/MERN-Auth_Bcrypt_JWT/blob/main/screenshots/LoggedIn.png)
---
## Some Cool Guide? [WiP]
1. Create new npm project, create a `package.json` file using the following command:
    
    <aside>
    💡 Create `backend` and `frontend` directories, navigate to the backend directory
    
    </aside>
    
    ```jsx
    npm init --y
    ```
    
2. Install the following packages:
    
    ```jsx
    npm i express mongoose cors body-parser nodemon bcrypt jsonwebtoken
    ```
    
3. Import the installed packages into your `server.js` file
    
    ```jsx
    const express = require("express");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const bodyParser = require("body-parser");
    const bcrypt = require("bcrypt");
    const jwt = require("jsonwebtoken");
    ```
    
    Purpose of the imported packages:
    
    - `express`: A web application framework for Node.js. It is used to build web applications and APIs.
    - `mongoose`: An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
    - `cors`: A node.js package for providing a Connect/Express middleware that can be used to enable CORS (Cross-Origin Resource Sharing) with various options.
    - `body-parser`: A middleware that parses incoming request bodies in a middleware before your handlers. It is available under the `req.body` property.
    - `nodemon`: A tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
    - `bcrypt`: A library to help you hash passwords. It makes storing passwords more secure.
    - `jsonwebtoken`: An implementation of JSON Web Tokens. This is used to create access tokens for application security.
4. Start the server by typing the following command in the terminal:
    
    ```jsx
    npx nodemon server
    ```
    
5. Create and Start Express Server on port 3000
    
    ```jsx
        // Create an Express server
        const app = express();
    
        // Start the server on port 3000
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    
    ```
    
6. Create an account on MongoDB:
    1. Go to the MongoDB website and create a new account. You can do this by clicking on the 'Sign up' button on the homepage. Fill out the required information and click 'Create account'.
    2. Create a new project:
        
        Once you've created an account and signed in, click on 'Project' and then 'New Project'. Enter a name for your project and click 'Next'.
        
    3. Set up a free tier cluster:
        
        After creating a project, you will be prompted to build a cluster. Choose the free tier plan and select a cloud provider and region. Click 'Create Cluster'.
        
    4. Create a database:
        
        Click on 'Collections' and then 'Add My Own Data'. Enter a database name and collection name and click 'Create'.
        
    5. Get the connection URL:
        
        Click on 'Connect' on your cluster view, then select 'Connect Your Application'. Choose 'Node.js' as your driver and copy the connection string. Replace `<password>` with your database user password, and `<dbname>` with the name of the database you want to connect to.
        
    6. Connect to MongoDB in your server file:
        
        In your `server.js` file, use `mongoose.connect()` to connect to your MongoDB database. Paste your connection URL as the argument. Here's an example:
        
        ```jsx
        const mongoose = require('mongoose');
        
        mongoose.connect('Your MongoDB connection URL', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Could not connect to MongoDB: ', error));
        
        ```
        
        Make sure to replace `'Your MongoDB connection URL'` with the connection URL you obtained from MongoDB.
        
  7.  TO-DO
