console.log('LISTENING TO QUERIES');

const spicedPg = require('spiced-pg');
const bcrypt = require('bcryptjs');
var db;

if (process.env.DATABASE_URL) {
    db = spicedPg(process.env.DATABASE_URL);
} else {
    db = spicedPg(`postgres:postgres:postgres@localhost:5432/nomad`);
}

// Register
module.exports.register = function(first, last, email, password) {
    const params = [first, last, email, password];
    const q = `INSERT INTO USERS (first, last, email, password) VALUES ($1, $2, $3, $4) RETURNING id`;
    return db
        .query(q, params)
        .then(function(results) {
            console.log('db reg results', results.rows);
            return results.rows[0].id;
        })
        .catch(err => {
            console.log('error in sending registration data to db', err);
        });
};

// Hash password
module.exports.hashPassword = function(plainTextPassword) {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt((err, salt) => {
            if (err) {
                console.log('error in bcrypt.genSalt', err);
            }
            bcrypt.hash(plainTextPassword, salt, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    });
};

// check password on login
module.exports.checkPassword = function(plainTextPassword, storedHash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainTextPassword, storedHash, (err, match) => {
            if (err) {
                reject(err);
            } else {
                resolve(match);
            }
        });
    });
};

// match password up with user info for logged In Router
module.exports.getUserInfo = function(email) {
    return db
        .query(
            `SELECT *
            FROM users
            WHERE email = $1`,
            [email]
        )
        .then(results => {
            console.log('results from getUserInfo: ', results.rows);
            return results.rows[0];
        })
        .catch(function(err) {
            console.log('error in getUserInfo', err);
            throw err;
        });
};

module.exports.getAllNomads = function() {
    const query = `
        SELECT * FROM nomads`;
    return db
        .query(query)
        .then(results => {
            //DB QUERY
            return results.rows; //returning results!!
        })
        .catch(err => {
            console.log('ERR WITH getAllNomads in the module', err);
        });
};

// Get Nomad info
