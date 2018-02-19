const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
//const csurf = require('csurf');
const uidSafe = require('uid-safe');
const path = require('path');
const db = require('./db.js');

//cookieSession
app.use(cookieParser());
app.use(
    cookieSession({
        secret: 'Muito secreto',
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

// csurf (add to client side!)
//app.use(csurf());

/*app.use(function(req, res, next) {
    res.cookie('mytoken', req.csrfToken());
    next();
});
*/

//COMPRESSION
app.use(compression());

//CODE TO CHECK IF WE ARE IN DEVELOPMEMT (BUNDLE.JS)
if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}
//Serve Static
app.use('/public', express.static(__dirname + '/public'));

//WELCOME ROUTE
app.get('/welcome/', function(req, res) {
    //res.sendFile(__dirname + "/index.html");
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

//REGISTER ROUTE
app.post('/register', (req, res) => {
    console.log(req.body);

    db
        .hashPassword(req.body.password)
        .then(password => {
            db
                .register(
                    req.body.first,
                    req.body.last,
                    req.body.email,
                    password
                )
                .then(id => {
                    // set cookies on register
                    req.session.user = {
                        id: id,
                        first: req.body.first,
                        last: req.body.last,
                        email: req.body.email,
                        password: req.body.password
                    };
                    res.json({ success: true });
                });
        })
        .catch(err => {
            req.session = null;
            console.log(req.session);
            res.json({ success: false });
        });
});

//LOGIN ROUTE
app.post('/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
        // error: true;
        res.json('Error: Empty input');
    } else {
        //compare against email to  check get password
        db
            .getUserInfo(req.body.email)
            .then(results => {
                console.log('login', results);
                return db
                    .checkPassword(req.body.password, res.password)
                    .then(match => {
                        if (match) {
                            //set cookies on login
                            req.session.user = {
                                id: results.id,
                                first: results.first,
                                last: results.last,
                                email: results.email
                            };
                            res.json({ success: true });
                        } else {
                            res.json({
                                errorMessage: 'email/password not a match'
                            });
                        }
                    });
            })
            .catch(err => {
                res.json('email/password not a match');
                console.log(
                    'error in post /Login',
                    err,
                    'cookies are: ',
                    req.session
                );
            });
    }
});

//LOG OUT OF HEREEEE
app.get('/logout', function(req, res) {
    req.session.user = null;
    res.redirect('/');
});

//ROUTER GET
app.get('*', function(req, res) {
    //catch all paths
    if (!req.session.user) {
        res.redirect('/welcome');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
