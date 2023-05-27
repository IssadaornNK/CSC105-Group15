// Import
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authentication/endpoint_login");

// Database Connection
const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_12eyur",
	password: "DRL1EsqIgnmfEn8c",
	database: "lab_blank01_123mwnk",
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

// Routes [endpoint] (Got small endpoint so do all in here) -----------------------------------------------------------------------------
app.get('/Administrator', (req, res) => {
    connection.query("SELECT * FROM Administrator", (err, result) => {
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

app.post('/Create_AAC', (req, res) => {
    const AAC_Name = req.body.AAC_Name;
    const AAC_Place = req.body.AAC_Place;
    const AAC_Year = req.body.AAC_Year;
    const AAC_Description = req.body.AAC_Description;
    const AAC_Picture = req.body.AAC_Picture;

    connection.query("INSERT INTO AACs (AAC_Name, AAC_Place, AAC_Year, AAC_Description, AAC_Picture) VALUES(?,?,?,?,?)", 
    [AAC_Name, AAC_Place, AAC_Year, AAC_Description, AAC_Picture],
    (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("Values inserted");
        }
    }
    );
}) 

app.delete('/AACs/:id', (req, res) => {
    const id = req.params.id;

    connection.query(`DELETE FROM AACs WHERE id = '${id}'`,
    (err, result) => {
        if (err) {
            console.log(err);
            res.send("Errorrr");
        }
        else {
            res.send("Deleted");
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