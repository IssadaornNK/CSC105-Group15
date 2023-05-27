// Import
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authentication/endpoint_login");

// Database Connection
const connection = mysql.createConnection({
	host: "db.cshack.site",
	port: "3306",
	user: "group15",
	password: "212227230244",
	database: "group15",
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
    } else {
        console.log("Database is connected");
    }
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 3000;  

// Middleware to parse JSON request body
app.use(express.json());
app.use(cookieParser()); 

// Enable CORS for requests from http://localhost:5173
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})); 

app.use('/auth', authRouter) 

// Checker backend still work ------------------------------------------
app.get('/CheckHello', (req, res) => {
    res.send("Hello World!!!!!!!!!!!!!!!")
})

// Routes [endpoint] (Got small endpoint so do all in here) -----------------------------------------------------------------------------
app.get('/User', (req, res) => {
    connection.query("SELECT * FROM User", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
})

// AACs --------------------------------------------------------------------------
app.get('/AACs', (req, res) => {
    connection.query("SELECT * FROM AACs", (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
})

app.post('/Create_User', (req, res) => {
    const Name = req.body.name;
    const Email = req.body.email;
    const Password = req.body.password;

    console.log(Name)
    console.log(Email)
    console.log(Password)

    connection.query("INSERT INTO User (name, email, password) VALUES(?,?,?)", 
    [Name, Email, Password],
    (err, result) => {
        if (err) {
            console.log(err);
            res.send("error 1");
        }
        else {
            res.send("Data inserted");
        }
    }
    );
}) 

app.delete('/User/:id', (req, res) => {
    const id = req.params.id;

    connection.query(`DELETE FROM User WHERE id = '${id}'`,
    (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error, Please try again.");
        }
        else {
            res.send("Deleted");
        }
    }
    );
}) 


app.patch('/update_User_name', (req, res) => {
    const Name = req.body.name;
    
    console.log(Name)


    connection.query("INSERT INTO User (name) VALUES(?)", 
    [Name],
    (err, result) => {
        if (err) {
            console.log(err);
            res.send("error");
        }
        else {
            res.send("Change saved.");
        }
    }
    );
}) 


// Projects --------------------------------------------------------------------------



// -------------------------------------------------------------------------------------

// Listen /////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Sever is listening on port ${port}`);
});