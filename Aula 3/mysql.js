const { query } = require('express');
const mysql = require('mysql');
const { resolve } = require('path');

const pool = mysql.createPool({
"User":"root",
"password":"root",
"database":"idev3",
"host":"localhost",
"port":"3307"

});

exports.execute = (query, param = [], varPool=pool) => {
    return new Promise((resolve, reject) => {
        varPool.query(query, param (error, results))
        if(error) {
            reject(error);
        }
        else {
            resolve(results);

        }
    })
}