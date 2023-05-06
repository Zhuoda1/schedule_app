// YOU CAN USE THIS FILE AS REFERENCE FOR SERVER DEVELOPMENT

// include the express module
var express = require("express");

// create an express application
var app = express();
const url = require('url');

// helps in extracting the body portion of an incoming request stream
var bodyparser = require('body-parser');

// fs module - provides an API for interacting with the file system
var fs = require("fs");

// helps in managing user sessions
var session = require('express-session');

// include the mysql module
// var mysql = require("mysql");

// helpful for reading, compiling, rendering pug templates
const pug = require("pug");

// Bcrypt library for comparing password hashes
const bcrypt = require('bcrypt');

// A  library that can help read uploaded file for bonus.
// var formidable = require('formidable')


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://zhuoda:sa8TYBBMsqrizdAN@db1.njyk01n.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// client.connect(url, function(err, db) {
//   if (err) throw err;
//   dbo = db.db("scheduleApp");
//   dbo.collection("events").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
//   // console.log();
// });
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);

// const dbCon = mysql.createConnection({
//   host: "cse-mysql-classes-01.cse.umn.edu",
//   user: "C4131DF23U58",
//   password: "3414",
//   database: "C4131DF23U58",
//   port: 3306
// });


// apply the body-parser middleware to all incoming requests
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

// use express-session
// in mremory session is sufficient for this assignment
app.use(session({
  secret: "scheduleAppSecretKey",
  saveUninitialized: true,
  resave: false
}
));

// convert pug to html
app.set('view engine', 'pug')

// server listens on port 9007 for incoming connections
app.listen(3000, () => async () => {
  client.connect();
  const dbo = client.db("scheduleApp");
  await dbo.collection("events").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    console.log("test");
    db.close();
  });
  console.log('Listening on port 3000!')
});

// middle ware to serve static files
app.use('/client', express.static(__dirname + '/client'));

// GET

// function to return the welcome page
app.get('/', function (req, res) {
  res.render(__dirname + '/client/welcome');
  // res.sendFile(__dirname + '/client/welcome.pug');
});

app.get('/index', function (req, res) {
  res.render(__dirname + '/client/welcome');
  // res.sendFile(__dirname + '/client/welcome.html');
});

// return schedule page
app.get('/schedule', function (req, res) {
  if (!req.session.user) {
    res.redirect(302, '/login');
  }
  else res.render(__dirname + '/client/schedule');
  // else res.sendFile(__dirname + '/client/schedule.html');
});

// return addEvent page
app.get('/addEvent', function (req, res) {
  if (!req.session.user) {
    res.redirect(302, '/login');
  }
  else res.render(__dirname + '/client/addEvent');
  // else res.sendFile(__dirname + '/client/addEvent.html');
});

// return login page
app.get('/login', function (req, res) {
  res.render(__dirname + '/client/login');
  // res.sendFile(__dirname + '/client/login.html');
});

// logout
app.get('/logout', function (req, res) {
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) throw err;
      else console.log("Successfully logout");
      res.redirect(302, '/');
    });
  }
  else {
    console.log("Not logged in");
    res.redirect(302, '/login');
  }
});

app.get('/logout.png', function (req, res) {
  res.sendFile(__dirname + '/client/logout.png');
});


app.get('/getSchedule', function (req, res) {
  if (!req.session.user) {
    res.redirect(302, '/login');
  }
  let day = req.query.dayQuery;
  dbCon.query('Select * from tbl_events where event_day = \'' + day + '\';', function (err, result) {
    // TODO
    if (err) {
      throw err;
    }
    result = result.sort(function (a, b) {
      return a.event_start.localeCompare(b.event_start);
    });
    res.json(result);
  });
});

app.get('/editEvent', function (req, res) {
  if (!req.session.user) {
    res.redirect(302, '/login');
  }
  var id = req.query.eventId;
  dbCon.query('SELECT * from tbl_events where event_id = \'' + id + '\';', function (err, result) {
    if (err) {
      throw err;
    }
    if(result.length == 0) res.sendStatus(404);
    else{
      var eventToEdit = {
        id: result[0].event_id,
        name: result[0].event_event,
        day: result[0].event_day,
        start: result[0].event_start,
        end: result[0].event_end,
        location: result[0].event_location,
        phone: result[0].event_phone,
        info: result[0].event_info,
        eurl: result[0].event_url,
      }
      res.render(__dirname + '/client/updateEvent', {record: eventToEdit});
      // res.sendFile(__dirname + '/client/updateEvent.html', {record: eventToEdit});
    }
  });  
});

// function to return the 404 message and error to client
app.get('*', function (req, res) {
  // add details
  res.sendStatus(404);
});

// POST

// login validation, return login status
app.post('/loginValid', function (req, res) {
  let username = req.body['username'];
  let password = req.body['password'];
  dbCon.query('Select * from tbl_accounts where acc_login = \'' + username + '\';', function (err, result) {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      res.json({ status: 'FAIL' });
      return;
    }
    const saltRounds = 10;
    let resultPw = result[0].acc_password;
    // const passwordHash = bcrypt.hashSync(resultPw, saltRounds);
    if (bcrypt.compareSync(password, resultPw)) {
      req.session.user = username;
      res.json({ status: 'SUCCESS' });
    }
    else {
      res.json({ status: 'FAIL' });
    }
    return;
  });
});

app.post('/postEventEntry', function (req, res) {
  if (!req.session.user) {
    res.redirect(302, '/login');
  }
  var insertRow = {
    event_day: req.body.day,
    event_event: req.body.event,
    event_start: req.body.start,
    event_end: req.body.end,
    event_location: req.body.location,
    event_phone: req.body.phone,
    event_info: req.body.info,
    event_url: req.body.url,
  };
  dbCon.query('INSERT INTO tbl_events set ?;', insertRow, function (err, result) {
    if (err) {
      throw err;
    }
    res.redirect(302, '/schedule');
  });
});

app.post('/editEventEntry', function (req, res) {
  if (!req.session.user) {
    res.redirect(302, '/login');
  }
  var id = req.query.eventId;
  var insertRow = {
    event_day: req.body.day,
    event_event: req.body.event,
    event_start: req.body.start,
    event_end: req.body.end,
    event_location: req.body.location,
    event_phone: req.body.phone,
    event_info: req.body.info,
    event_url: req.body.url,
  };
  dbCon.query('UPDATE tbl_events set ? where event_id = \'' + id + '\';', insertRow, function (err, result) {
    if (err) {
      throw err;
    }
    res.redirect(302, '/schedule');
  });
});

// DELETE

app.delete('/delEventEntry', function (req, res) {
  if (!req.session.user) {
    res.redirect(302, '/login');
  }
  var id = req.query.eventId;
  dbCon.query('SELECT event_id from tbl_events where event_id = \'' + id + '\';', function (err, result1) {
    if (err) {
      throw err;
    }
    if(result1.length == 0) res.sendStatus(404);
    else{
      dbCon.query('Delete from tbl_events where event_id = \'' + id + '\';', function (err, result2) {
        if (err) {
          throw err;
        }
        res.sendStatus(200);
      });
    }  
  });  
});